import boto3
import json
import time
import uuid
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.prompts import MessagesPlaceholder
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_aws import ChatBedrock
from langchain_community.chat_message_histories import DynamoDBChatMessageHistory
from langchain_core.runnables import RunnablePassthrough
from langchain_community.retrievers import AmazonKnowledgeBasesRetriever
from langchain.chains import create_history_aware_retriever
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.messages.ai import AIMessage
from langchain_core.messages.human import HumanMessage
from datetime import date

bedrock_runtime = boto3.client(
    service_name="bedrock-runtime"
)

model_kwargs =  { 
    "max_tokens": 2048,
    "temperature": 0.0,
    "top_k": 250,
    "top_p": 1,
    "stop_sequences": ["\n\nHuman"]
}

model_id = "anthropic.claude-3-sonnet-20240229-v1:0"

TableName="SessionTable"
dynamodbClient = boto3.client('dynamodb')
dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(TableName)

def lambda_handler(event, context):
    today = date.today().strftime("%B %d, %Y")

    user_msg_time = int(time.time())

    print(table.item_count)

    model = ChatBedrock(
        client=bedrock_runtime,
        model_id=model_id,
        model_kwargs=model_kwargs,
    )
    
    # Amazon Bedrock - KnowledgeBase Retriever 
    retriever = AmazonKnowledgeBasesRetriever(
        knowledge_base_id="T8AKGNTIAX",
        retrieval_config={"vectorSearchConfiguration": {"numberOfResults": 10, 'overrideSearchType': "HYBRID"}}
    )
    

    contextualize_q_system_prompt = f"""Given the chat history below and the latest user question <user_question></user_question> \
    which might reference context in the chat history, formulate a standalone question \
    which can be understood without the chat history. Do NOT under any circumstance answer the question, \
    only reformulate the user question. Return only the reformulated question without the context or any additional explanation.
    Your response must not be very long and phrase it as a question.\
    You MUST include today's date {today} at the begining of the question. """
    print(contextualize_q_system_prompt)
    contextualize_q_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", contextualize_q_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "<user_question>{input}</user_question>"),
        ]
    )
    history_aware_retriever = create_history_aware_retriever(
        model, retriever, contextualize_q_prompt
    )
    
 
    
    qa_system_prompt = """You are an assistant for question-answering tasks.
    You always strictly answer in markdown.
    You always strictly provide citations.
    The following pieces of information are your knowledge to answer the question (refer to them as "my knowledge"). 
    If you don't know the answer, just say that you don't know.
    {context}"""
    print(today)

    qa_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", qa_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )
    print(qa_system_prompt)
    question_answer_chain = create_stuff_documents_chain(model, qa_prompt)
    
    rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)


    history = DynamoDBChatMessageHistory(table_name="SessionTable", session_id=event["SessionId"], key={
        "UserId": event["UserId"],
        "SessionId": event["SessionId"],
    })

    response = rag_chain.invoke({"input": event['prompt'], "chat_history": history.messages}, config = {"configurable": {"session_id":event["SessionId"]}})

    
    human_msg = HumanMessage(content=event['prompt'],id=str(uuid.uuid4()),response_metadata={"timestamp":user_msg_time})
    print(human_msg.content)
    print(human_msg.id)
    print(human_msg.response_metadata)
    history.add_user_message(human_msg)
    
    ai_msg = AIMessage(content=response['answer'],id=str(uuid.uuid4()),response_metadata={"timestamp":int(time.time())})
    print(ai_msg.content)
    print(ai_msg.id)
    print(ai_msg.response_metadata)
    history.add_ai_message(ai_msg)
    fullResponse = {
    "response": response['answer'],
    "messageID": ai_msg.id
    }

    return {
    'statusCode': 200,
    'body': fullResponse
    }

