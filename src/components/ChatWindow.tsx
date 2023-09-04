import NewWindow, { EventHandler, OpenEventHandler } from 'react-new-window';
import { useSelector } from '../hooks';

interface ChatWindowProps {
  onOpen?: OpenEventHandler | null | undefined;
  onUnload?: EventHandler | null | undefined;
}

const ChatWindow = (props: ChatWindowProps) => {
  const { onOpen, onUnload } = props;

  const users = useSelector((state) => state.users);

  return (
    <NewWindow onOpen={onOpen} onUnload={onUnload} features={{ width: 250, height: 400 }}>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </NewWindow>
  );
};

export default ChatWindow;
