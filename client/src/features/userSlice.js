import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

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
  followerList: [],
  followList: [],
  savedList: [],
};

const initState = () => {
  const cookies = new Cookies();
  const userCookie = cookies.get('user');

  if (userCookie) {
    return userCookie;
  } else {
    return initialState;
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState(),
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
      state.followerList = action.payload.followerList;
      state.followList = action.payload.followList;
      state.savedList = action.payload.savedList;
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
      state.followerList = [];
      state.followList = [];
      state.savedList = [];
    },
  },
});

export const { setSignOut, setLoginDetail } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
