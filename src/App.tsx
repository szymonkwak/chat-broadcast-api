import { useState } from 'react';
import { ChatSidebar, ChatWindow } from './components';

function App() {
  const [activeConversation, setActiveCoversation] = useState<string | null>(null);

  return (
    <div>
      <ChatSidebar setActiveCoversation={setActiveCoversation} />
      <ChatWindow />
    </div>
  );
}

export default App;
