import { useState, useRef } from 'react'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'
const ChatBedrockResponseDislike = ({ messageID }) => {
  const [visible, setVisible] = useState(false)
  const [issue, setissue] = useState('')
  const [inputValue, setinputValue] = useState('')
  const toast = useRef(null)

  const divIssues = [
    'Mentioned Political View',
    'Provided Inaccurate Response',
    'Contained Offensive Language',
    'Message Was Unhelpful'
  ]
  const [selectedDiv, setSelectedDiv] = useState(null)

  const handleDivClick = (divIssue, index) => {
    setSelectedDiv(index)
    setissue(divIssue)
    setinputValue('')
  }
  const handleChange = (issueInput) => {
    setSelectedDiv(null)
    setinputValue(issueInput)
    setissue(issueInput)
  }
  const dislikeResponse = (messageID) => {
    toast.current.show({
      severity: 'success',
      summary: 'Thanks for your feedback!',
      life: 3000
    })
    setVisible(true)
    console.log('Disliked message ID: ' + messageID)
  }
  const submitFeedback = async (e) => {
    console.log(issue)
    setVisible(false)
    toast.current.show({
      severity: 'success',
      summary: 'Thanks for your feedback!',
      life: 3000
    })
  }
  return (
    <>
      <Toast ref={toast} />
      <div>
        <button
          onClick={() => {
            dislikeResponse(messageID)
          }}
        >
          <i className="pi pi-thumbs-down text-primary-pantone-032c text-lg"></i>
        </button>
        <div className="card flex justify-content-center">
          <Dialog
            header="Report Issue"
            visible={visible}
            className=" w-2/5 report-inaccuracies-modal"
            onHide={() => setVisible(false)}
          >
            <div className="w-full  flex justify-around flex-wrap space-y-2">
              {divIssues.map((divIssue, index) => (
                <div
                  key={index}
                  className={`flex justify-around px-10 py-3 rounded-lg border-2 border-seconday-272c ${
                    selectedDiv === index
                      ? 'bg-dark-blue text-light-grey'
                      : 'hover:bg-dark-blue hover:text-light-grey'
                  }`}
                  onClick={() => handleDivClick(divIssue, index)}
                >
                  <div>
                    <p className="w-full text-base">{divIssue}</p>
                  </div>
                </div>
              ))}
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full rounded-lg focus:outline-none  pl-4 pr-11 h-10 text-dark-blue border-medium-grey border-2"
                  placeholder="Other"
                  value={inputValue}
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <button className="py-3" onClick={submitFeedback}>
                <span className="font-bold text-center bg-primary-pantone-032c rounded-md text-light-grey  p-4 hover:bg-light-red ">
                  Submit
                </span>
              </button>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  )
}
export default ChatBedrockResponseDislike
