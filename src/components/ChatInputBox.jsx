import { useState, useEffect, useRef } from 'react'
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
  const [isConnected, setIsConnected] = useState(false)
  const socketRef = useRef(null)
  const currentMessageRef = useRef(null)
  const pendingMessageRef = useRef(null)

  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.close()
      }
    }
  }, [])

  const connectWebSocket = () => {
    const socket = new WebSocket(import.meta.env.VITE_WEBSOCKET_BASE_URL)

    socket.onopen = () => {
      console.log('WebSocket connected')
      setIsConnected(true)
      if (pendingMessageRef.current) {
        socket.send(pendingMessageRef.current)
        pendingMessageRef.current = null
      }
    }

    socket.onmessage = (event) => {
      let response
      try {
        response = JSON.parse(event.data)
      } catch (error) {
        response = event.data
      }

      const messageContent = response.message || response

      setchatMessages((prevState) => {
        const lastMessage = prevState.History[prevState.History.length - 1]

        if (lastMessage && lastMessage.type === 'ai') {
          // Update the existing AI message
          const updatedHistory = [...prevState.History]

          // Check if this is the final full message
          if (response.message) {
            // Replace the entire content with the final message
            updatedHistory[updatedHistory.length - 1] = {
              ...lastMessage,
              data: {
                ...lastMessage.data,
                content: messageContent
              }
            }
          } else {
            // Append the new content to the existing message
            updatedHistory[updatedHistory.length - 1] = {
              ...lastMessage,
              data: {
                ...lastMessage.data,
                content: lastMessage.data.content + messageContent
              }
            }
          }

          return {
            ...prevState,
            History: updatedHistory
          }
        } else {
          // Create a new AI message
          const newAiMessage = {
            type: 'ai',
            data: {
              content: messageContent,
              id: uuid()
            }
          }
          return {
            ...prevState,
            History: [...prevState.History, newAiMessage]
          }
        }
      })

      // Check if this is the last message
      if (response.message) {
        setsentRequest(false)
        currentMessageRef.current = null
      }
    }

    socket.onclose = () => {
      console.log('WebSocket disconnected')
      setIsConnected(false)
      setsentRequest(false)
      currentMessageRef.current = null
    }

    socket.onerror = (error) => {
      console.error('WebSocket error:', error)
      setsentRequest(false)
    }

    socketRef.current = socket
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
      data: {
        content: message,
        id: uuid(),
        additional_kwargs: {
          timestamp: Math.floor(Date.now() / 1000)
        }
      }
    }
    e.target.reset()
    let newSessionId = chatMessages['SessionId'] || uuid()

    try {
      if (newConversation) {
        setnewConversation(false)
        const newConv = {
          History: [humanMessage],
          UserId: userId,
          SessionId: newSessionId
        }
        setchatMessages(newConv)
        handleAppendChat(newConv)
      } else {
        setchatMessages((prevState) => ({
          ...prevState,
          History: [...prevState.History, humanMessage]
        }))
      }
      setMessage('')

      const messageToSend = JSON.stringify({
        action: 'sendmessage',
        prompt: promptMessage,
        UserId: userId,
        SessionId: newSessionId
      })

      if (!isConnected) {
        connectWebSocket()
        pendingMessageRef.current = messageToSend
      } else {
        socketRef.current.send(messageToSend)
      }
    } catch (error) {
      console.log('error sending message:', error)
      setsentRequest(false)
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <>
      {sentRequest && (
        <div className="w-full py-2">
          <ProgressBar
            mode="indeterminate"
            style={{ height: '6px' }}
            className="chat-progress-bar"
          ></ProgressBar>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full">
        <p className="text-primary-pantone5255c text-center pb-2">
          <strong>DISCLAIMER:</strong> The chatbot can make mistakes. Please
          check its' responses.
        </p>
        <div className="flex flex-row items-center rounded-xl bg-medium-grey w-full px-4">
          <div className="flex-grow">
            <div className="relative w-full">
              <TextareaAutosize
                className="flex w-full rounded-xl focus:outline-none p-3 text-dark-blue scrollbar scrollbar-thin scrollbar-thumb-primary-pantone-032c scrollbar-track-white scrollbar-thumb-rounded"
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
                <i className="pi pi-send text-light-grey text-lg"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ChatInputBox
