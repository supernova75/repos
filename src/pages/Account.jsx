import { useState } from 'react'
import AccountFileUploadModal from '../components/AccountFileUploadModal'
const Account = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <p>Account Page</p>
      <button
        onClick={() => {
          setVisible(true)
          console.log(visible)
        }}
      >
        Click me
      </button>
      <AccountFileUploadModal visible={visible} setVisible={setVisible} />
    </div>
  )
}
export default Account
