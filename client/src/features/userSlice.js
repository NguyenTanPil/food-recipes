import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  background: '',
  location: '',
  bio: '',
  joined: '',
  userName: '',
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
      state.background = action.payload.background;
      state.location = action.payload.location;
      state.bio = action.payload.bio;
      state.joined = action.payload.joined;
      state.userName = action.payload.userName;
    },
    setSignOut(state) {
      state.id = '';
      state.name = '';
      state.email = '';
      state.avatar = '';
      state.location = '';
      state.bio = '';
      state.background = '';
      state.joined = '';
      state.userName = '';
    },
  },
});

export const { setSignOut, setLoginDetail } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;