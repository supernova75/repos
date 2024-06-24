import { useState } from 'react'
import ChatBedrockResponseMenu from './ChatBedrockResponseMenu'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'
import remarkBreaks from 'remark-breaks'
const ChatBedrockResponse = ({ Bedrockresponse, messageID }) => {
  const [menuDisplay, setmenuDisplay] = useState(false)

  const toggleMenuDisplay = (messageID) => {
    setmenuDisplay(!menuDisplay)
  }
  const styles = {
    tableCell: {
      whiteSpace: 'pre-wrap'
    }
  }

  return (
    <div className="col-start-1 col-end-10 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className=" ml-3 w-auto ">
          {menuDisplay && (
            <ChatBedrockResponseMenu
              Bedrockresponse={Bedrockresponse}
              messageID={messageID}
            />
          )}
          <div className=" bg-white  rounded-br-xl rounded-tl-xl rounded-tr-xl shadow text-base py-2 px-4 ">
            <div className="flex justify-end hover:cursor-pointer">
              <i
                className="pi pi-ellipsis-h text-dark-blue"
                style={{ fontSize: '1.5rem' }}
                onClick={() => {
                  toggleMenuDisplay(messageID)
                }}
              ></i>
            </div>

            <ReactMarkdown
              className="p-5 text-dark-blue "
              remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
              rehypePlugins={[rehypeKatex, rehypeHighlight]}
              skipHtml={true}
            >
              {Bedrockresponse}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChatBedrockResponse
