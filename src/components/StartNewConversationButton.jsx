const StartNewConversationButton = ({ setnewConversation }) => {
  const startNewConversation = () => {
    setnewConversation(true)
    console.log('hi')
  }
  return (
    <div>
      <div className="mt-6 w-full">
        <button
          className=" h-full w-full "
          onClick={() => startNewConversation()}
        >
          <span className="new-conversation-button font-bold text-center bg-primary-pantone-032c rounded-md p-4 hover:bg-light-red h-full">
            New Conversation
          </span>
        </button>
      </div>
    </div>
  )
}
export default StartNewConversationButton
