import ConversationsHistorySidePanel from '../components/ConversationsHistorySidePanel'
import ChatMainContainer from '../components/ChatMainContainer'
const Chat = () => {
  return (
    <main className="flex justify-between max-h-dvh bg-dark-blue">
      <div className=" flex-grow flex  justify-center h-screen ">
        <div className="flex h-screen antialiased text-light-grey">
          <ConversationsHistorySidePanel />
          <ChatMainContainer />
        </div>
      </div>
    </main>
  )
}
export default Chat
