import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  joined: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginDetail(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.joined = action.payload.joined;
    },
    setSignOut(state) {
      state.id = '';
      state.name = '';
      state.email = '';
      state.avatar = '';
      state.joined = '';
    },
  },
});

export const { setSignOut, setLoginDetail } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
