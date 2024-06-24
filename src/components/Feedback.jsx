import { useState, useRef } from 'react'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'

import FeedbackRating from './FeedbackRating'
const Feedback = () => {
  const toast = useRef(null)
  const [visible, setVisible] = useState(false)
  const [accuracyRating, setAccuracyRating] = useState(0)
  const [speedRating, setSpeedRating] = useState(0)
  const [dataRating, setDataRating] = useState(0)
  const [easeOfUseRating, setEaseOfUseRating] = useState(0)
  const [userComment, setUserComment] = useState('')

  const handleAccuracyRatingChange = (value) => {
    setAccuracyRating(value)
  }

  const handleSpeedRatingChange = (value) => {
    setSpeedRating(value)
  }

  const handleDataRatingChange = (value) => {
    setDataRating(value)
  }

  const handleEaseOfUseRatingChange = (value) => {
    setEaseOfUseRating(value)
  }
  const handleCommentChange = (comment) => {
    setUserComment(comment)
  }
  const submitFeedback = async (e) => {
    console.log(accuracyRating)
    console.log(speedRating)
    console.log(dataRating)
    console.log(easeOfUseRating)
    console.log(userComment)
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
        <span className=" text-primary-pantone5255c text-center w-full flex justify-center text-sm py-2 ">
          <button
            className="feedback-button p-2"
            onClick={() => setVisible(true)}
          >
            Send Feedback
          </button>
        </span>
        <div className="card flex justify-content-center">
          <Dialog
            header="Give us your feedback!"
            visible={visible}
            className=" w-2/5 feedback-modal"
            onHide={() => setVisible(false)}
          >
            <div className="w-full">
              <div className="w-full flex justify-around px-10 py-3">
                <p className="w-full text-lg">Accuracy</p>
                <FeedbackRating onValueChange={handleAccuracyRatingChange} />
              </div>
              <div className="w-full flex justify-around px-10 py-3">
                <p className="w-full text-lg">Speed</p>
                <FeedbackRating onValueChange={handleSpeedRatingChange} />
              </div>
              <div className="w-full flex justify-around px-10 py-3">
                <p className="w-full text-lg">Data</p>
                <FeedbackRating onValueChange={handleDataRatingChange} />
              </div>
              <div className="w-full flex justify-around px-10 py-3">
                <p className="w-full text-lg">Ease of Use</p>
                <FeedbackRating onValueChange={handleEaseOfUseRatingChange} />
              </div>
              <div className="w-full">
                <p>Comment</p>
                <span>
                  <textarea
                    rows={5}
                    className=" bg-medium-grey w-full text-dark-blue p-2"
                    onChange={(e) => handleCommentChange(e.target.value)}
                  ></textarea>
                </span>
              </div>
              <div className="w-full flex justify-center">
                <button className="py-3" onClick={submitFeedback}>
                  <span className="font-bold text-center text-light-grey bg-primary-pantone-032c rounded-md  p-4 hover:bg-light-red ">
                    Submit
                  </span>
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  )
}
export default Feedback
