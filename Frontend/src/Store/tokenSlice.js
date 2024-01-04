import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState: {
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = !state.isLoggedIn;
    },
    getToken(state, action) {
      return localStorage.getItem("token");
    },
    deleteToken(state, action) {
      localStorage.setItem("token", "");
    },
  },
});

export const { setToken, getToken, deleteToken, logoutUser } =
  tokenSlice.actions;
export default tokenSlice.reducer;
