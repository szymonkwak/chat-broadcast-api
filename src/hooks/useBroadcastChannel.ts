import { useRef } from 'react';
import { Message, mockUsers } from '../mocks';

const useBroadcastChannel = () => {
  const bc = useRef(new BroadcastChannel('chat-bc'));
  const socket = useRef(new WebSocket(''));

  const startListening = () => {
    bc.current.addEventListener('message', (e: MessageEvent<Message>) => {
      socket.current.send(JSON.stringify(e.data));

      const userToUpdate = mockUsers.find((user) => user.id === e.data.to);
      if (userToUpdate) userToUpdate.messages.push(e.data);
    });
  };

  const sendMessage = (message: Message) => {
    bc.current.postMessage(message);
  };

  return { startListening, sendMessage };
};

export default useBroadcastChannel;
