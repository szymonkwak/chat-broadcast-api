import { ChatWindow } from './components';
import { useState } from 'react';
import { useDispatch } from './hooks';
import { setDefaultUsers } from './store/usersSlice';
import { mockUsers } from './mocks/users';

function App() {
  const [showWindow, setShowWindow] = useState(false);

  const dispatch = useDispatch();

  const setupUsers = () => dispatch(setDefaultUsers(mockUsers));

  const openNewWindow = () => setShowWindow(true);

  return (
    <div>
      <button
        onClick={setupUsers}
        className="m-10 rounded-md bg-emerald-600 px-3 py-2 text-center text-sm text-white shadow-sm hover:bg-emerald-700 active:scale-95"
      >
        Set up users
      </button>
      <button
        onClick={openNewWindow}
        className="m-10 rounded-md bg-emerald-600 px-3 py-2 text-center text-sm text-white shadow-sm hover:bg-emerald-700 active:scale-95"
      >
        Open chat
      </button>

      {showWindow && <ChatWindow onUnload={() => setShowWindow(false)} />}
    </div>
  );
}

export default App;
