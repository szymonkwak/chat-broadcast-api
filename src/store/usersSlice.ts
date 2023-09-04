import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  online: boolean;
}

export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserOnlineStatus: (state, action: PayloadAction<{ id: string; online: boolean }>) => {
      const { id, online } = action.payload;
      const userToUpdate = state.users.find((user) => user.id === id);
      if (userToUpdate) userToUpdate.online = online;
    },
  },
});

export const { setUserOnlineStatus } = usersSlice.actions;

export default usersSlice.reducer;
