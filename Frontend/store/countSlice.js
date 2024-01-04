import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "countSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increament(state) {
      state.value += 1;
    },
    decreament(state) {
      state.value -= 1;
    },
  },
});

export const { increament, decreament } = countSlice.actions;
export default countSlice.reducer;
