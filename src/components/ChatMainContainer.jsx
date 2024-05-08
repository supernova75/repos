import ChatInputBox from './ChatInputBox'
import ChatBedrockResponse from './ChatBedrockResponse'
import ChatUserMessage from './ChatUserMessage'
const ChatMainContainer = () => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex flex-col flex-auto h-5/6 p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-primary-pantone5255c h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-seconday-272c scrollbar-track-primary-pantone5255c scrollbar-thumb-rounded mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                <ChatBedrockResponse
                  Bedrockresponse={'Hey How are you today?'}
                  responseID={1}
                />
                <ChatUserMessage userMessage={"I'm ok what about you?"} />
                <ChatBedrockResponse
                  Bedrockresponse={'Lorem ipsum dolor sit amet !'}
                  responseID={2}
                />
                <ChatUserMessage userMessage={'Lorem ipsum dolor sit?'} />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                  }
                  responseID={3}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. ?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.'
                  }
                  responseID={4}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={'Lorem ipsum dolor'}
                  responseID={5}
                />
                <ChatUserMessage userMessage={'Lorem ipsum dolor sit?'} />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                  }
                  responseID={6}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. ?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.'
                  }
                  responseID={7}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={'Lorem ipsum dolor'}
                  responseID={8}
                />
                <ChatUserMessage userMessage={'Lorem ipsum dolor sit?'} />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                  }
                  responseID={9}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. ?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.'
                  }
                  responseID={9}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing?'
                  }
                />
                <ChatBedrockResponse Bedrockresponse={'Lorem ipsum dolor'} />
                <ChatUserMessage userMessage={'Lorem ipsum dolor sit?'} />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                  }
                  responseID={10}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. ?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.'
                  }
                  responseID={11}
                />
                <ChatUserMessage
                  userMessage={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing?'
                  }
                />
                <ChatBedrockResponse
                  Bedrockresponse={'Lorem ipsum dolor'}
                  responseID={12}
                />
              </div>
            </div>
          </div>
          <ChatInputBox />
        </div>
      </div>
    </div>
  )
}
export default ChatMainContainer
