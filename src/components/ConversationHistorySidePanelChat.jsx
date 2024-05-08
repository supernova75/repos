import { useState } from 'react'
const ConversationHistorySidePanelChat = ({ lastMessage }) => {
  const [displayDelete, setdisplayDelete] = useState(false)
  const changeChat = () => {
    console.log('click')
  }
  const deleteChat = () => {
    console.log('delete')
  }
  return (
    <li
      className="relative border border-x-0  border-t-0 border-y-seconday-272c hover:bg-primary-pantone5255c"
      onMouseEnter={() => {
        setdisplayDelete(true)
      }}
      onMouseLeave={() => {
        setdisplayDelete(false)
      }}
    >
      <p className="text-nowrap h-full px-3 py-3 text-ellipsis overflow-x-clip text-sm ml-2">
        {lastMessage}
      </p>
      {displayDelete && (
        <div className="h-full w-full absolute z-10 top-0 right-0  ">
          <div
            className="h-full w-full bg-primary-pantone5255c bg-opacity-25  "
            onClick={() => changeChat()}
          ></div>
          <button
            className="absolute top-0 right-0 h-full "
            onClick={() => deleteChat()}
          >
            <span className="bg-medium-grey text-sm  w-7 h-7 rounded-full   flex justify-center align-middle items-center mr-2">
              <i className="pi pi-trash text-primary-pantone-032c text-sm "></i>
            </span>
          </button>
        </div>
      )}
    </li>
  )
}
export default ConversationHistorySidePanelChat
