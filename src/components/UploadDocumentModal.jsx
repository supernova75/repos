import { useState, useRef } from 'react'
import { Dialog } from 'primereact/dialog'
import { Toast } from 'primereact/toast'
import { FileUpload } from 'primereact/fileupload'

const UploadDocumentModal = () => {
  const toast = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Toast ref={toast} />
      <div>
        <div>
          <button
            className="flex justify-center w-full"
            onClick={() => setVisible(true)}
          >
            <div className=" bg-dark-blue rounded-md p-4 m-4 w-full hover:bg-seconday-272c border-2 border-seconday-272c">
              <span className="new-conversation-button  font-bold text-center  h-full">
                <i className="pi pi-upload text-lg mr-2 mt-1"></i>
                Upload Documents
              </span>
            </div>
          </button>
        </div>
        <div className="card flex justify-content-center">
          <Dialog
            header="Upload Documents"
            visible={visible}
            className=" w-3/4 h-4/5 feedback-modal"
            onHide={() => setVisible(false)}
          >
            <p className="text-primary-pantone-032c py-5">
              Documents you upload will be shared among your team
            </p>
            <FileUpload
              name="demo[]"
              url={'/api/upload'}
              multiple
              accept="*"
              maxFileSize={3000000}
              className="overflow-y-auto scrollbar-thumb-seconday-272c"
              emptyTemplate={
                <div className="w-full flex justify-center ">
                  <div className="flex align-items-center flex-col  w-full justify-center ">
                    <i
                      className="pi pi-file mt-3 p-5 text-center"
                      style={{
                        fontSize: '5em',
                        color: 'var(--surface-d)'
                      }}
                    ></i>
                    <span
                      style={{
                        fontSize: '1.2em',
                        color: 'var(--text-color-secondary)'
                      }}
                      className="my-5 text-center"
                    >
                      Drag and Drop Files Here
                    </span>
                  </div>
                </div>
              }
            />
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default UploadDocumentModal
