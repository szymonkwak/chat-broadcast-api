import { useState } from 'react';
import { ChatSidebar, ChatWindow } from './components';

function App() {
  const [activeConversation, setActiveCoversation] = useState<string | null>(null);

  return (
    <div className='flex'>
      <ChatSidebar setActiveCoversation={setActiveCoversation} />
      <ChatWindow activeConversation={activeConversation} />
    </div>
  );
}

export default App;
