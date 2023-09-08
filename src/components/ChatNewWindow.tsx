import NewWindow from 'react-new-window';
import { ChatWindow } from '.';
import { mockUsers } from '../mocks';

interface ChatNewWindowProps {
  chatId: string;
  handleCloseChatWindow: (chatId: string) => void;
}

const ChatNewWindow = (props: ChatNewWindowProps) => {
  const { chatId, handleCloseChatWindow } = props;

  return (
    <NewWindow
      title={`Chat with ${mockUsers.find((user) => user.id === chatId)?.name}`}
      features={{ width: 400, height: 600 }}
      onUnload={() => handleCloseChatWindow(chatId)}
    >
      <div className="flex bg-neutral-900 h-full">
        <ChatWindow activeChatId={chatId} />
      </div>
    </NewWindow>
  );
};

export default ChatNewWindow;
