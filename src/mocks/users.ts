import av1 from '../assets/avatars/av-1.svg';
import av2 from '../assets/avatars/av-2.svg';
import av3 from '../assets/avatars/av-3.svg';

export interface User {
  id: string;
  name: string;
  avatar: string;
  messages: Message[];
}

export interface Message {
  date: string;
  msgId: string;
  from: string;
  to: string;
  msg: string;
}

export const mockUsers: User[] = [
  {
    id: 'user-1-id',
    name: 'User 1',
    avatar: av1,
    messages: [
      {
        date: '2023-09-07T11:05:33.374Z',
        msgId: '8d3ce243-2e79-4726-8c1a-df2df66a4918',
        from: 'user-1-id',
        to: 'user-K-id',
        msg: 'Test msg 22',
      },
      {
        date: '2023-09-07T11:11:37.374Z',
        msgId: '880f5193-4a41-40bf-961e-141d9551486e',
        from: 'user-K-id',
        to: 'user-1-id',
        msg: 'Test msg 56',
      },
      {
        date: '2023-09-07T11:25:19.374Z',
        msgId: 'c668645f-2600-4449-be68-313ddf6cb59b',
        from: 'user-1-id',
        to: 'user-K-id',
        msg: 'Test msg 870',
      },
    ],
  },
  {
    id: 'user-2-id',
    name: 'User 2',
    avatar: av2,
    messages: [
      {
        date: '2023-09-07T10:01:10.374Z',
        msgId: '58f11a2e-d09a-4110-b135-89ce7b16ebe0',
        from: 'user-2-id',
        to: 'user-K-id',
        msg: 'Test msg 345',
      },
      {
        date: '2023-09-07T10:12:22.374Z',
        msgId: 'fe59cbbb-7a90-407f-b25b-573bc17b888f',
        from: 'user-K-id',
        to: 'user-2-id',
        msg: 'Test msg 2378',
      },
    ],
  },
  {
    id: 'user-3-id',
    name: 'User 3',
    avatar: av3,
    messages: [
      {
        date: '2023-09-07T14:11:42.374Z',
        msgId: 'fe296b65-d7c7-4ad2-8e54-fa89022c6ed5',
        from: 'user-K-id',
        to: 'user-3-id',
        msg: 'Test msg 45',
      },
      {
        date: '2023-09-07T14:12:44.374Z',
        msgId: '875e5fd6-d190-42e9-8b8d-34743f7fc28f',
        from: 'user-3-id',
        to: 'user-K-id',
        msg: 'Test msg 65',
      },
    ],
  },
];
