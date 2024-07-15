import { useState, useEffect } from 'react'
import ConversationsHistorySidePanelMenuGroup from './ConversationsHistorySidePanelMenuGroup'
import StartNewConversationButton from './StartNewConversationButton'
import { Tooltip } from 'primereact/tooltip'
import { Badge } from 'primereact/badge'

const ConversationsHistorySidePanel = ({
  setnewConversation,
  allUserConversations,
  setchatMessages,
  newConversation
}) => {
  const [hideAll, sethideAll] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState(null)

  return (
    <div className="flex flex-col py-8  w-64 bg-primary-pantone5255c flex-shrink-0">
      <div className="w-full flex justify-end pr-2">
        <Tooltip target=".disclaimer-target-icon" />

        <i
          className="disclaimer-target-icon pi pi-exclamation-circle text-lg p-2"
          data-pr-tooltip="DISCLAIMER: Do not Share important information."
          data-pr-position="right"
          data-pr-at="right+5 top"
          data-pr-my="left center-2"
        ></i>
        <Tooltip target=".about-target-icon" />

        <i
          className="about-target-icon pi pi-question-circle text-lg p-2"
          data-pr-tooltip="Use the chatbot to complete tasks or ask it questions."
          data-pr-position="right"
          data-pr-at="right+5 top"
          data-pr-my="left center-2"
        ></i>
      </div>
      <StartNewConversationButton
        setnewConversation={setnewConversation}
        newConversation={newConversation}
      />
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between text-lg mt-6 pl-6">
          <span className="past-conversations font-bold">
            Past Conversations
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <ConversationsHistorySidePanelMenuGroup
            allUserConversations={allUserConversations}
            setchatMessages={setchatMessages}
            setnewConversation={setnewConversation}
          />
        </div>
      </div>
    </div>
  )
}
export default ConversationsHistorySidePanel
