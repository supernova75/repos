const ChatBedrockResponseMenu = ({ Bedrockresponse, responseID }) => {
  const copyResponse = (Bedrockresponse) => {
    console.log('Copied Response: ' + Bedrockresponse)
  }
  const refreshResponse = (responseID) => {
    console.log('Refreshed Response ID: ' + responseID)
  }
  const likeResponse = (responseID) => {
    console.log('Liked Response ID: ' + responseID)
  }
  const dislikeResponse = (responseID) => {
    console.log('Disliked Response ID: ' + responseID)
  }
  return (
    <div className=" w-full flex justify-end ease-in-out duration-300">
      <div className=" bg-light-grey text-seconday-272 w-32 h-auto mb-2 rounded-md py-2 px-3 flex justify-between ">
        <i
          className="pi pi-copy text-dark-blue text-lg "
          onClick={() => {
            copyResponse(Bedrockresponse)
          }}
        ></i>
        <i
          className="pi pi-ellipsis-h pi-refresh text-seconday-284c text-lg"
          onClick={() => {
            refreshResponse(responseID)
          }}
        ></i>
        <i
          className="pi pi-thumbs-up text-seconday-360C text-lg "
          onClick={() => {
            likeResponse(responseID)
          }}
        ></i>
        <i
          className="pi pi-thumbs-down text-primary-pantone-032c text-lg"
          onClick={() => {
            dislikeResponse(responseID)
          }}
        ></i>
      </div>
    </div>
  )
}
export default ChatBedrockResponseMenu
