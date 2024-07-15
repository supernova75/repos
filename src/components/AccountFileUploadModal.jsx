import FileUpload from '../components/FileUpload'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

const AccountFileUploadModal = ({ visible, setVisible }) => {
  console.log(visible)
  return (
    <div className="card flex justify-content-center ">
      <Dialog
        header="Upload files"
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">
          <FileUpload />
        </p>
      </Dialog>
    </div>
  )
}
export default AccountFileUploadModal
