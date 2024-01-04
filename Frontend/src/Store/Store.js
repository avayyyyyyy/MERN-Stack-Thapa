import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";

const Store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});

export default Store;
