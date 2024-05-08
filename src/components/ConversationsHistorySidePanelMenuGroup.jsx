import { useState, useEffect } from 'react'
import ConversationHistorySidePanelChat from './ConversationHistorySidePanelChat'
const ConversationsHistorySidePanelMenuGroup = ({
  groupName,
  expandedGroup,
  setExpandedGroup
}) => {
  const [toggleMenu, settoggleMenu] = useState(false)

  const toggleConversations = () => {
    if (expandedGroup === groupName) {
      setExpandedGroup(null)
    } else {
      setExpandedGroup(groupName)
    }
  }

  return (
    <div className="w-full">
      <button
        className="flex flex-row justify-between items-center hover:bg-seconday-272c w-full p-3 "
        onClick={toggleConversations}
      >
        <div className="text-sm font-semibold">{groupName}</div>
        {expandedGroup === groupName ? (
          <i className="pi pi-angle-up text-light-grey text-sm"></i>
        ) : (
          <i className="pi pi-angle-down text-light-grey text-sm"></i>
        )}
      </button>
      {expandedGroup === groupName && (
        <div>
          <ul className=" bg-dark-blue max-h-72 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-seconday-272c scrollbar-track-dark-blue scrollbar-thumb-rounded">
            <ConversationHistorySidePanelChat
              lastMessage={
                'Can you help me with the basic understanding of XYZ'
              }
            />
            <ConversationHistorySidePanelChat
              lastMessage={'How do I fix the margin of the three lines'}
            />
            <ConversationHistorySidePanelChat
              lastMessage={'I dont understand the difference'}
            />
            <ConversationHistorySidePanelChat
              lastMessage={
                'Can you help me with the basic understanding of XYZ'
              }
            />
            <ConversationHistorySidePanelChat
              lastMessage={'How do I fix the margin of the three lines'}
            />
          </ul>
        </div>
      )}
    </div>
  )
}
export default ConversationsHistorySidePanelMenuGroup
