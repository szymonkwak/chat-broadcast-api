import { max } from 'date-fns';
import { Message, mockUsers } from '../mocks';

const users = mockUsers;

interface ChatSidebarProps {
  setActiveCoversation: React.Dispatch<React.SetStateAction<string | null>>;
}

const ChatSidebar = (props: ChatSidebarProps) => {
  const { setActiveCoversation } = props;

  const getLastMsg = (messages: Message[]) => {
    return messages.find((msg) => msg.date === max(messages.map((message) => new Date(message.date))).toISOString());
  };
  return (
    <div className="bg-emerald-800">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => setActiveCoversation(user.id)}
          className="w-full p-4 flex items-center gap-4 border-2 border-b-emerald-950 border-transparent hover:bg-emerald-600 active:border-emerald-950"
        >
          <img src={user.avatar} alt="avatar" className="h-16" />
          <div className="flex flex-col grow">
            <span className="text-xl text-left">{user.name}</span>
            <div className="flex justify-between items-baseline">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                {getLastMsg(user.messages)?.msg || null}
              </span>
              <span className="ml-auto text-xs text-gray-400 min-w-fit">
                {getLastMsg(user.messages) ? new Date(getLastMsg(user.messages)!.date).toLocaleTimeString() : null}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ChatSidebar;
