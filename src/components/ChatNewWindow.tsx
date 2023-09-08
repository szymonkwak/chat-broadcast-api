import NewWindow from 'react-new-window';
import { ChatWindow } from '.';
import { mockUsers } from '../mocks';

interface ChatNewWindowProps {
  convId: string;
  handleCloseChatWindow: (convId: string) => void;
}

const ChatNewWindow = (props: ChatNewWindowProps) => {
  const { convId, handleCloseChatWindow } = props;

  return (
    <NewWindow
      key={convId}
      title={`Chat with ${mockUsers.find((user) => user.id === convId)?.name}`}
      features={{ width: 400, height: 600 }}
      onUnload={() => handleCloseChatWindow(convId)}
    >
      <div className="flex bg-neutral-900 h-full">
        <ChatWindow activeConversation={convId} />
      </div>
    </NewWindow>
  );
};

export default ChatNewWindow;
