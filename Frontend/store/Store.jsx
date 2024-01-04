import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice.js";

const Store = configureStore({
  reducer: {
    count: countSlice,
  },
});

export default Store;
