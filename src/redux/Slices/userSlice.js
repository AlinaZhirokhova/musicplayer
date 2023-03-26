import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem('token') || '',
  email: '',
  password: ''
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeToken: (state, action) => {
      state.token = action.payload
    },
    setUserInfo: (state, action) => {
      state.email = action.payload.email,
      state.password = action.payload.password
    },
    deleteToken: (state) => {
      state.token = ''
    }
  },
});

export const { changeToken, setUserInfo, deleteToken } = userSlice.actions;

export default userSlice.reducer;
