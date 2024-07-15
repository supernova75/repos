import { useState } from 'react'
import { Rating } from 'primereact/rating'
import '../App.css'

const FeedbackRating = ({ onValueChange }) => {
  const [value, setValue] = useState(null)
  const handleValueChange = (e) => {
    setValue(e.value)
    onValueChange(e.value)
  }
  return (
    <div className="card flex justify-between w-full">
      <Rating
        value={value}
        onChange={handleValueChange}
        cancel={false}
        stars={5}
        onIcon={
          <i className="pi pi-star-fill text-seconday-1255c text-lg  star"></i>
        }
        offIcon={
          <i className="pi pi-star-fill text-medium-grey text-lg star"></i>
        }
        className="star"
      />
    </div>
  )
}

export default FeedbackRating
