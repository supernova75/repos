import { useState, useEffect } from 'react'
import ConversationsHistorySidePanelMenuGroup from './ConversationsHistorySidePanelMenuGroup'
import StartNewConversationButton from './StartNewConversationButton'
import UploadDocumentModal from './UploadDocumentModal'
import { Tooltip } from 'primereact/tooltip'
import ConversationHistorySidePanelChat from './ConversationHistorySidePanelChat'

const ConversationsHistorySidePanel = ({
  setnewConversation,
  setallUserConversations,
  chatMessages,
  allUserConversations,
  setchatMessages,
  newConversation
}) => {
  const [hideAll, sethideAll] = useState(false)
  const [sidePanelExpanded, setsidePanelExpanded] = useState(false)

  const [expandedGroup, setExpandedGroup] = useState(null)

  const toggleSidePanel = () => {
    setsidePanelExpanded((previous) => !previous)
  }

  return (
    <div className="flex flex-col bg-primary-pantone5255c flex-shrink-0">
      <div className="w-full flex justify-end pb-4 px-2">
        <button
          onClick={() => {
            toggleSidePanel()
          }}
        >
          {sidePanelExpanded ? (
            <div className="rounded-full hover:bg-seconday-272c">
              <i className="pi pi-arrow-left text-xl p-3"></i>
            </div>
          ) : (
            <div className="rounded-full hover:bg-seconday-272c">
              <i className="pi pi-bars text-xl p-3 "></i>
            </div>
          )}
        </button>
      </div>
      {sidePanelExpanded ? (
        <div className="w-64 ">
          <UploadDocumentModal />
          <StartNewConversationButton
            setnewConversation={setnewConversation}
            newConversation={newConversation}
          />

          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between text-lg mt-6 pl-6">
              <span className="past-conversations text-center font-bold">
                Past Conversations
              </span>
            </div>
            <div className="flex flex-col mt-4">
              {/* <ConversationsHistorySidePanelMenuGroup
                groupName="Today"
                expandedGroup={expandedGroup}
                setExpandedGroup={setExpandedGroup}
                allUserConversations={allUserConversations}
                chatMessages={chatMessages}
                setchatMessages={setchatMessages}
                setnewConversation={setnewConversation}
                setallUserConversations={setallUserConversations}
              /> */}
              <div>
                <ul className=" bg-dark-blue max-h-96 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-seconday-272c scrollbar-track-dark-blue scrollbar-thumb-rounded">
                  {allUserConversations.map((conversation) => (
                    <ConversationHistorySidePanelChat
                      chatMessages={chatMessages}
                      allUserConversations={allUserConversations}
                      key={conversation['SessionId']}
                      lastMessage={
                        conversation['History'][0]['data']['content']
                      }
                      lastMessageTimestamp={
                        conversation['History'][0]['data']['additional_kwargs'][
                          'timestamp'
                        ]
                      }
                      SessionId={conversation['SessionId']}
                      setchatMessages={setchatMessages}
                      conversation={conversation}
                      setnewConversation={setnewConversation}
                      setallUserConversations={setallUserConversations}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
export default ConversationsHistorySidePanel
