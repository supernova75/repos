import { useState, useEffect } from 'react'
import ConversationsHistorySidePanelMenuGroup from './ConversationsHistorySidePanelMenuGroup'
const ConversationsHistorySidePanel = () => {
  const [hideAll, sethideAll] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState(null)

  return (
    <div className="flex flex-col py-8  w-64 bg-primary-pantone5255c flex-shrink-0">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between text-lg mt-6 pl-6">
          <span className="font-bold">Past Conversations</span>
        </div>
        <div className="flex flex-col mt-4">
          <ConversationsHistorySidePanelMenuGroup
            groupName="Today"
            expandedGroup={expandedGroup}
            setExpandedGroup={setExpandedGroup}
          />
          <ConversationsHistorySidePanelMenuGroup
            groupName="Past Week"
            expandedGroup={expandedGroup}
            setExpandedGroup={setExpandedGroup}
          />
          <ConversationsHistorySidePanelMenuGroup
            groupName="Past Month"
            expandedGroup={expandedGroup}
            setExpandedGroup={setExpandedGroup}
          />
          <ConversationsHistorySidePanelMenuGroup
            groupName="All Time"
            expandedGroup={expandedGroup}
            setExpandedGroup={setExpandedGroup}
          />
        </div>
      </div>
    </div>
  )
}
export default ConversationsHistorySidePanel
