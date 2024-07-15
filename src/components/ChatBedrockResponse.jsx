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
    <div className="col-start-1 col-end-10 p-3 rounded-lg ">
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
              className="p-5 text-dark-blue max-w-5xl text-wrap"
              remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
              rehypePlugins={[rehypeKatex, rehypeHighlight]}
              skipHtml={true}
              components={{
                p: ({ node, ...props }) => (
                  <p className="whitespace-pre-wrap" {...props} />
                ),
                pre: ({ node, ...props }) => (
                  <pre
                    className="whitespace-pre-wrap overflow-x-auto"
                    {...props}
                  />
                ),
                code: ({ node, ...props }) => (
                  <code className="whitespace-pre-wrap" {...props} />
                ),
                h1: ({ node, ...props }) => (
                  <h1 className="break-words" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="break-words" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="break-words" {...props} />
                ),
                h4: ({ node, ...props }) => (
                  <h4 className="break-words" {...props} />
                ),
                h5: ({ node, ...props }) => (
                  <h5 className="break-words" {...props} />
                ),
                h6: ({ node, ...props }) => (
                  <h6 className="break-words" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="break-words" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <table className="table-auto w-full" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="break-words" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="break-words" {...props} />
                )
              }}
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
