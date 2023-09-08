import { useState } from 'react';
import { ChatNoConversation, ChatSidebar, ChatWindow, OpenChatWindowIcon } from './components';
import ChatNewWindow from './components/ChatNewWindow';

function App() {
  const [activeConvId, setActiveCovId] = useState<string | null>(null);
  const [openedChatWindows, setOpenedChatWindows] = useState<string[]>([]);

  const handleOpenChatWindow = (convId: string) => {
    setOpenedChatWindows((prev) => prev.concat(convId));
  };

  const handleCloseChatWindow = (convId: string) => {
    const updatedChats = openedChatWindows.filter((chat) => chat !== convId);
    setOpenedChatWindows(updatedChats);
  };

  return (
    <div className="flex">
      <ChatSidebar setActiveCoversation={setActiveCovId} />
      {activeConvId ? (
        <>
          <ChatWindow activeConversation={activeConvId} />
          <OpenChatWindowIcon onClick={() => handleOpenChatWindow(activeConvId)} />
        </>
      ) : (
        <ChatNoConversation />
      )}

      {openedChatWindows.map((convId) => (
        <ChatNewWindow convId={convId} handleCloseChatWindow={handleCloseChatWindow} />
      ))}
    </div>
  );
}

export default App;
