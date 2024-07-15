import { CopyToClipboard } from 'react-copy-to-clipboard'
import ChatBedrockResponseLike from './ChatBedrockResponseLike'
import ChatBedrockResponseDislike from './ChatBedrockResponseDislike'
const ChatBedrockResponseMenu = ({ Bedrockresponse, messageID }) => {
  //Function to call the bedrock api again
  const refreshResponse = (messageID) => {
    console.log('Refreshed message ID: ' + messageID)
  }

  return (
    <div className=" w-full flex justify-end ease-in-out duration-300">
      <div className=" bg-light-grey text-seconday-272 w-32 h-auto mb-2 rounded-md py-2 px-3 flex justify-between ">
        <button>
          <CopyToClipboard
            text={Bedrockresponse}
            onCopy={(text, result) => console.log(result)}
          >
            <i className="pi pi-copy text-dark-blue text-lg "></i>
          </CopyToClipboard>
        </button>
        {/* <i
          className="pi pi-ellipsis-h pi-refresh text-seconday-284c text-lg"
          onClick={() => {
            refreshResponse(messageID)
          }}
        ></i> */}
        <p className="  text-seconday-284c text-sm">|</p>

        <ChatBedrockResponseLike messageID={messageID} />
        <ChatBedrockResponseDislike messageID={messageID} />
      </div>
    </div>
  )
}
export default ChatBedrockResponseMenu
