const ChatUserMessage = ({ userMessage }) => {
  return (
    <div className="col-start-4 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="relative mr-3 text-base  bg-dark-blue py-2 px-4 shadow rounded-bl-xl rounded-tl-xl rounded-tr-xl">
          <div>
            <p className="py-3">{userMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatUserMessage
