import { useEffect, useState } from 'react';
import { NoActiveChatInfo, ChatSidebar, ChatWindow, OpenChatWindowIcon } from './components';
import ChatNewWindow from './components/ChatNewWindow';
import { useBroadcastChannel } from './hooks';

const App = () => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [openedChatWindows, setOpenedChatWindows] = useState<string[]>([]);

  const handleOpenChatWindow = (chatId: string) => setOpenedChatWindows((prev) => prev.concat(chatId));

  const handleCloseChatWindow = (chatId: string) =>
    setOpenedChatWindows(openedChatWindows.filter((id) => id !== chatId));

  const { startListening } = useBroadcastChannel();

  useEffect(() => startListening(), []);

  return (
    <div className="flex">
      <ChatSidebar setActiveChatId={setActiveChatId} />
      {activeChatId ? (
        <>
          <ChatWindow chatId={activeChatId} />
          <OpenChatWindowIcon onClick={() => handleOpenChatWindow(activeChatId)} />
        </>
      ) : (
        <NoActiveChatInfo />
      )}

      {openedChatWindows.map((id) => (
        <ChatNewWindow key={id} chatId={id} handleCloseChatWindow={handleCloseChatWindow} />
      ))}
    </div>
  );
};

export default App;
