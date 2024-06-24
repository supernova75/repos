import { useState, useRef } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast'
import axios from 'axios'

const ConversationHistorySidePanelChat = ({
  lastMessage,
  SessionId,
  setchatMessages,
  conversation,
  setnewConversation
}) => {
  const [displayDelete, setdisplayDelete] = useState(false)
  const [visible, setVisible] = useState(false)
  const changeChat = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL
      let url = `${baseUrl}chatbot-conversation?UserId=1&SessionId=${SessionId}`

      let response = await axios.get(url, {
        headers: {
          'x-api-key': import.meta.env.VITE_API_ACCESS_KEY
        }
      })
      setchatMessages(response.data.body[0])
      setnewConversation(false)
    } catch (error) {
      setchatMessages('error fetching chat:' + error)
    }
    console.log(SessionId)
  }
  const deleteChat = () => {
    console.log('delete')
  }
  const toast = useRef(null)

  const accept = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Conversation Deleted',
      life: 3000
    })
  }

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog
        visible={visible}
        header="Please Confirm"
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        acceptClassName="p-button-danger"
        defaultFocus="accept"
      />
      <li
        className="relative border border-x-0  border-t-0 border-y-seconday-272c hover:bg-primary-pantone5255c hover:cursor-pointer"
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
              onClick={() => setVisible(true)}
            >
              <span className="bg-medium-grey text-sm  w-7 h-7 rounded-full   flex justify-center align-middle items-center mr-2">
                <i className="pi pi-trash text-primary-pantone-032c text-sm "></i>
              </span>
            </button>
          </div>
        )}
      </li>
    </>
  )
}
export default ConversationHistorySidePanelChat
