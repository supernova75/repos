import { useState, useEffect } from 'react'
import ConversationHistorySidePanelChat from './ConversationHistorySidePanelChat'
const ConversationsHistorySidePanelMenuGroup = ({
  chatMessages,
  allUserConversations,
  setchatMessages,
  setnewConversation,
  setallUserConversations
}) => {
  const [toggleMenu, settoggleMenu] = useState(false)
  const [aggregatedMenu, setaggregatedMenu] = useState([])

  const toggleConversations = () => {
    if (expandedGroup === groupName) {
      setExpandedGroup(null)
    } else {
      setExpandedGroup(groupName)
    }
  }
  useEffect(() => {
    setaggregatedMenu(allUserConversations)
  }, [allUserConversations])

  return aggregatedMenu ? (
    aggregatedMenu.length > 0 && (
      <div className="w-full">
        <button
          className="flex flex-row justify-between items-center hover:bg-seconday-272c w-full p-3 "
          onClick={toggleConversations}
        >
          <div className="text-sm font-semibold past-conversations">
            {groupName}
          </div>
          {expandedGroup === groupName ? (
            <i className="pi pi-angle-up text-light-grey text-sm"></i>
          ) : (
            <i className="pi pi-angle-down text-light-grey text-sm"></i>
          )}
        </button>
        {expandedGroup === groupName && (
          <div>
            <ul className=" bg-dark-blue max-h-72 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-seconday-272c scrollbar-track-dark-blue scrollbar-thumb-rounded">
              {aggregatedMenu.map((conversation) => (
                <ConversationHistorySidePanelChat
                  chatMessages={chatMessages}
                  allUserConversations={allUserConversations}
                  key={conversation['SessionId']}
                  lastMessage={conversation['History'][0]['data']['content']}
                  SessionId={conversation['SessionId']}
                  setchatMessages={setchatMessages}
                  conversation={conversation}
                  setnewConversation={setnewConversation}
                  setallUserConversations={setallUserConversations}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  ) : (
    <></>
  )
}
export default ConversationsHistorySidePanelMenuGroup
