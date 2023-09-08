import { mockUsers } from '../mocks';

interface ChatWindowProps {
  activeChatId: string | null;
}

const ChatWindow = (props: ChatWindowProps) => {
  const { activeChatId: activeConversation } = props;

  const user = mockUsers.find((user) => user.id === activeConversation);

  return (
    <div className="flex-1 flex flex-col justify-end">
      <div>
        {user
          ? user.messages.map(({ msg, date, from, msgId }) =>
              from === user.id ? (
                <div key={msgId} className="m-2 flex gap-2">
                  <img src={user.avatar} alt="avatar" className="h-10" />
                  <div className="flex flex-col w-max">
                    <div className="p-2 rounded-xl rounded-bl-none bg-slate-200 text-black">{msg}</div>
                    <div className="mt-1 text-xs text-gray-400 ml-auto">{new Date(date).toLocaleTimeString()}</div>
                  </div>
                </div>
              ) : (
                <div key={msgId} className="m-2 flex flex-col items-end">
                  <div className="max-w-max p-2 rounded-xl rounded-br-none bg-emerald-700">{msg}</div>
                  <div className="mt-1 text-xs text-gray-400 ml-auto">{new Date(date).toLocaleTimeString()}</div>
                </div>
              )
            )
          : null}
      </div>

      <div className="p-3 h-14 bg-slate-300 flex gap-3">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#047857" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <input type="text" placeholder='type a message' className="p-2 grow rounded-md text-black" />

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#047857"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
