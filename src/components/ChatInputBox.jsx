const ChatInputBox = () => {
  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-medium-grey w-full px-4 ">
      {/* Attachment button */}
      <div>
        <button className="flex items-center justify-center text-primary-pantone-032c">
          <i className="pi pi-paperclip text-primary-pantone-032c text-lg "></i>
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full rounded-xl focus:outline-none  pl-4 pr-11 h-10 text-seconday-284c"
            placeholder="Type your question!"
          />
        </div>
      </div>
      <div className="ml-4">
        <button className="flex items-center justify-center bg-primary-pantone-032c rounded-xl text-light-grey px-4 py-1 flex-shrink-0">
          <span>Send</span>
          <span className="ml-2 h-full flex justify-center items-center">
            <i className="pi pi-send text-light-grey text-lg "></i>
          </span>
        </button>
      </div>
    </div>
  )
}
export default ChatInputBox
