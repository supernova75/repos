const StartNewConversationButton = ({ setnewConversation }) => {
  const startNewConversation = () => {
    setnewConversation(true)
    console.log('hi')
  }
  return (
    <button
      className="flex justify-center w-full"
      onClick={() => startNewConversation()}
    >
      <div className=" bg-primary-pantone-032c rounded-md p-4 m-4 w-full hover:bg-light-red">
        <span className="new-conversation-button  font-bold text-center  h-full">
          New Conversation
        </span>
      </div>
    </button>
  )
}
export default StartNewConversationButton
