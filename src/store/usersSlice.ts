import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  online: boolean;
}

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setDefaultUsers: (state, action: PayloadAction<User[]>) => {
      return action.payload;
    },

    setUserOnlineStatus: (state, action: PayloadAction<{ id: string; online: boolean }>) => {
      const { id, online } = action.payload;
      const userToUpdate = state.find((user) => user.id === id);
      if (userToUpdate) userToUpdate.online = online;
    },
  },
});

export const { setDefaultUsers, setUserOnlineStatus } = usersSlice.actions;

export default usersSlice.reducer;
