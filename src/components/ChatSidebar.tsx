import { max } from 'date-fns';
import { Message, mockUsers } from '../mocks';

const users = mockUsers;

interface ChatSidebarProps {
  setActiveChatId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ChatSidebar = (props: ChatSidebarProps) => {
  const { setActiveChatId: setActiveCoversation } = props;

  const getLastMsg = (messages: Message[]) => {
    return messages.find((msg) => msg.date === max(messages.map((message) => new Date(message.date))).toISOString());
  };
  return (
    <div className="flex-1 bg-emerald-800 h-screen flex flex-col min-w-max max-w-lg">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => setActiveCoversation(user.id)}
          className="w-full p-4 flex items-center gap-4 border-2 border-b-emerald-950 border-transparent hover:bg-emerald-600 active:border-emerald-950"
        >
          <img src={user.avatar} alt="avatar" className="h-16" />
          <div className="flex flex-col grow">
            <span className="text-xl text-left">{user.name}</span>
            <div className="flex justify-between items-baseline gap-2">
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
      <div className="p-4 mt-auto border-t-2  border-t-emerald-950">
        <button className="hover:brightness-75">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
