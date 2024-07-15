import { useState, useRef } from 'react'
import UploadDocumentModal from './UploadDocumentModal'
const NewConversationPrompt = ({ setMessage }) => {
  const suggestions = [
    {
      suggestion: 'Summarize a piece of text',
      inputMessage:
        'Hello! Please summarize the following piece of text in bullet points: '
    },
    {
      suggestion: 'Translate a piece of text',
      inputMessage:
        'Hello! Please translate the following piece of text to Arabic: '
    },
    {
      suggestion: (
        <span className="flex">
          <img
            src="../Logos/Growth_mark_rgb_red.svg"
            alt="Logo"
            className="w-4 mr-2"
          />
          Ask about Tamkeen
        </span>
      ),
      inputMessage:
        "Hello! Could you tell me about Tamkeen's plan for 2021-2025? "
    }
  ]
  const handleDivClick = (suggestion) => {
    setMessage(suggestion)
  }

  return (
    <div className="flex flex-col justify-start align-middle items-center h-full text-primary-pantone5255c text-lg space-y-3 pt-2">
      <p className=" text-primary-pantone5255c text-3xl">Welcome!</p>
      <p>Start chatting with your personal assistant!</p>
      <p>Here are some suggestions!</p>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="flex justify-around px-10 py-3 rounded-lg border-2 border-dark-blue hover:bg-dark-blue hover:text-light-grey hover:cursor-pointer"
          onClick={() => handleDivClick(suggestion['inputMessage'])}
        >
          <div>
            <p className="w-full text-base">{suggestion['suggestion']}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default NewConversationPrompt
