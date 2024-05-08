import { useState } from 'react'
import ChatBedrockResponseMenu from './ChatBedrockResponseMenu'
const ChatBedrockResponse = ({ Bedrockresponse, responseID }) => {
  const [menuDisplay, setmenuDisplay] = useState(false)
  const toggleMenuDisplay = (responseID) => {
    setmenuDisplay(!menuDisplay)
  }
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className=" ml-3 w-auto ">
          {menuDisplay && (
            <ChatBedrockResponseMenu
              Bedrockresponse={Bedrockresponse}
              responseID={responseID}
            />
          )}
          <div className="bg-seconday-272c  rounded-br-xl rounded-tl-xl rounded-tr-xl shadow text-sm  py-2 px-4 ">
            <div className="flex justify-end">
              <i
                className="pi pi-ellipsis-h text-dark-blue"
                style={{ fontSize: '1.5rem' }}
                onClick={() => {
                  toggleMenuDisplay(responseID)
                }}
              ></i>
            </div>
            <div>
              <p className="py-3">{Bedrockresponse}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatBedrockResponse
