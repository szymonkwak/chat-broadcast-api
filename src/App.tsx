import { useState } from 'react';
import { NoConversationInfo, ChatSidebar, ChatWindow, OpenChatWindowIcon } from './components';
import ChatNewWindow from './components/ChatNewWindow';

const App = () => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [openedChatWindows, setOpenedChatWindows] = useState<string[]>([]);

  const handleOpenChatWindow = (chatId: string) => setOpenedChatWindows((prev) => prev.concat(chatId));

  const handleCloseChatWindow = (chatId: string) =>
    setOpenedChatWindows(openedChatWindows.filter((id) => id !== chatId));

  return (
    <div className="flex">
      <ChatSidebar setActiveChatId={setActiveChatId} />
      {activeChatId ? (
        <>
          <ChatWindow activeChatId={activeChatId} />
          <OpenChatWindowIcon onClick={() => handleOpenChatWindow(activeChatId)} />
        </>
      ) : (
        <NoConversationInfo />
      )}

      {openedChatWindows.map((id) => (
        <ChatNewWindow key={id} chatId={id} handleCloseChatWindow={handleCloseChatWindow} />
      ))}
    </div>
  );
};

export default App;
