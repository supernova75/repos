import { useState } from 'react'
import axios from 'axios'
import '../App.css'
import uuid from 'uuid-random'
import TextareaAutosize from 'react-textarea-autosize'

import { ProgressBar } from 'primereact/progressbar'
const ChatInputBox = ({
  setchatMessages,
  chatMessages,
  message,
  setMessage,
  newConversation,
  setnewConversation,
  userId,
  setallUserConversations
}) => {
  const [sentRequest, setsentRequest] = useState(false)

  const handleAppendHistory = (messageToAppend) => {
    setchatMessages((prevState) => ({
      ...prevState,
      History: [...prevState.History, messageToAppend]
    }))
  }
  const handleAppendChat = (chat) => {
    setallUserConversations((prevState) => [...prevState, chat])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setsentRequest(true)
    let promptMessage = message
    let humanMessage = {
      type: 'human',
      data: { content: message }
    }
    e.target.reset()
    let newSessionId = 0
    try {
      if (newConversation) {
        newSessionId = uuid()
        setnewConversation(false)
        const newConv = {
          History: [humanMessage],
          UserId: userId,
          SessionId: newSessionId
        }
        setchatMessages(newConv)
        setallUserConversations((prevState) => [...prevState, newConv])
      } else {
        handleAppendHistory(humanMessage)
        newSessionId = chatMessages['SessionId']
      }
      setMessage('')
      let response = await axios.post(
        'https://e34mqxo4ql.execute-api.us-east-1.amazonaws.com/dev/chatbot-conversation-prompt',
        {
          prompt: promptMessage,
          UserId: userId,
          SessionId: newSessionId,
          department: 'strategy'
        },
        { headers: { 'x-api-key': import.meta.env.VITE_API_ACCESS_KEY } }
      )
      let aiMessage = {
        type: 'ai',
        data: {
          content: response['data']['body']['response'],
          id: response['data']['body']['messageID']
        }
      }
      setsentRequest(false)
      setnewConversation(false)
      handleAppendHistory(aiMessage)
    } catch (error) {
      console.log('error fetching response from bedrock:' + error)
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <>
      {sentRequest && (
        <div className=" w-full py-2">
          <ProgressBar
            mode="indeterminate"
            style={{ height: '6px' }}
            className="chat-progress-bar"
          ></ProgressBar>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <p className=" text-primary-pantone5255c text-center pb-2">
          <strong>DISCLAIMER:</strong> The chatbot can make mistakes. Please
          check its' responses.
        </p>
        <div className="flex flex-row items-center rounded-xl bg-medium-grey w-full px-4 ">
          <div className="flex-grow ">
            <div className="relative w-full">
              <TextareaAutosize
                className="flex w-full rounded-xl focus:outline-none  p-3 text-dark-blue  scrollbar scrollbar-thin scrollbar-thumb-primary-pantone-032c scrollbar-track-white scrollbar-thumb-rounded"
                style={{
                  resize: 'none'
                }}
                placeholder="Type your question!"
                onChange={handleChange}
                value={message}
                maxRows={5}
              />
            </div>
          </div>
          <div className="ml-4">
            <button
              className="flex items-center justify-center bg-primary-pantone-032c rounded-xl text-light-grey px-4 py-1 flex-shrink-0"
              type="submit"
            >
              <span>Send</span>
              <span className="ml-2 h-full flex justify-center items-center">
                <i className="pi pi-send text-light-grey text-lg "></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default ChatInputBox
