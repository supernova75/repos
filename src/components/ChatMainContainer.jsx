import ChatInputBox from './ChatInputBox'
import ChatBedrockResponse from './ChatBedrockResponse'
import ChatUserMessage from './ChatUserMessage'
import NewConversationPrompt from './NewConversationPrompt'
import Feedback from './Feedback'
import { useEffect, useRef, useState } from 'react'
const ChatMainContainer = ({
  chatMessages,
  setchatMessages,
  newConversation,
  setnewConversation,
  userId,
  setallUserConversations
}) => {
  const scrollRef = useRef(null)
  const [message, setMessage] = useState('')

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }
  useEffect(() => {
    if (newConversation) {
      // Reset chat messages for new conversation
      setchatMessages({ History: [''] })
    }
  }, [newConversation])

  useEffect(() => {
    console.log(chatMessages)
    scrollToBottom()
  }, [chatMessages])
  return (
    <div className=" flex-grow relative flex flex-col h-full w-full">
      <div className="flex flex-row h-full w-full">
        <div className="flex flex-col flex-auto h-5/6 p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-medium-grey h-full p-4  ">
            <div
              className="flex flex-col h-full overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-seconday-272c scrollbar-track-medium-grey scrollbar-thumb-rounded mb-4"
              ref={scrollRef}
            >
              {newConversation ? (
                <NewConversationPrompt setMessage={setMessage} />
              ) : chatMessages ? (
                chatMessages['History']?.length > 0 && (
                  <div className="flex flex-col h-full">
                    <div className="grid grid-cols-12 gap-y-2">
                      {chatMessages['History'].map((message, index) => {
                        return message['type'] === 'ai' ? (
                          <ChatBedrockResponse
                            key={index}
                            Bedrockresponse={message['data']['content']}
                            messageID={message['data']['id']}
                          />
                        ) : message['type'] === 'human' ? (
                          <ChatUserMessage
                            key={index}
                            userMessage={message['data']['content']}
                          />
                        ) : null
                      })}
                    </div>
                  </div>
                )
              ) : (
                'error'
              )}
            </div>

            <ChatInputBox
              setchatMessages={setchatMessages}
              chatMessages={chatMessages}
              message={message}
              setMessage={setMessage}
              newConversation={newConversation}
              setnewConversation={setnewConversation}
              userId={userId}
              setallUserConversations={setallUserConversations}
            />
          </div>
          <Feedback />
        </div>
      </div>
    </div>
  )
}
export default ChatMainContainer
