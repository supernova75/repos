import { Toast } from 'primereact/toast'
import { useRef } from 'react'

const ChatBedrockResponseLike = ({ messageID }) => {
  const toast = useRef(null)

  //Function to send a 'liked' chat feedback to RDS
  const likeResponse = (messageID) => {
    console.log('Liked message ID: ' + messageID)
    toast.current.show({
      severity: 'success',
      summary: 'Thanks for your feedback!',
      life: 3000
    })
  }
  return (
    <>
      <Toast ref={toast} />
      <button
        onClick={() => {
          likeResponse(messageID)
        }}
      >
        <i className="pi pi-thumbs-up text-seconday-360C text-lg "></i>
      </button>
    </>
  )
}
export default ChatBedrockResponseLike
