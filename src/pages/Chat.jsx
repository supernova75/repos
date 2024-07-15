import ConversationsHistorySidePanel from '../components/ConversationsHistorySidePanel'
import ChatMainContainer from '../components/ChatMainContainer'
import axios from 'axios'
import Client from '../services/api'
import { useState, useEffect } from 'react'
const Chat = ({ userId }) => {
  const [chatMessages, setchatMessages] = useState({ History: [] })
  const [allUserConversations, setallUserConversations] = useState([])
  const [newConversation, setnewConversation] = useState(true)

  useEffect(() => {
    const getChat = async () => {
      try {
        let UserId = localStorage.getItem('UserId')

        const baseUrl = import.meta.env.VITE_API_BASE_URL

        let url = `${baseUrl}chatbot_all_user_conversations?UserId=${UserId}`

        let response = await axios.get(url, {
          headers: {
            'x-api-key': import.meta.env.VITE_API_ACCESS_KEY
          }
        })

        setallUserConversations(response.data.body)

        console.log(chatMessages)
      } catch (error) {
        setchatMessages('error fetching chat:' + error)
      }
    }
    getChat()
  }, [])

  return (
    <main className="flex justify-between max-h-dvh bg-white">
      <div className=" flex-grow flex  justify-center h-screen ">
        <div className="flex h-screen w-full antialiased text-light-grey">
          <ConversationsHistorySidePanel
            setnewConversation={setnewConversation}
            allUserConversations={allUserConversations}
            setallUserConversations={setallUserConversations}
            chatMessages={chatMessages}
            setchatMessages={setchatMessages}
            newConversation={newConversation}
          />

          <ChatMainContainer
            chatMessages={chatMessages}
            newConversation={newConversation}
            setnewConversation={setnewConversation}
            setchatMessages={setchatMessages}
            userId={userId}
            setallUserConversations={setallUserConversations}
          />
        </div>
      </div>
    </main>
  )
}
export default Chat
