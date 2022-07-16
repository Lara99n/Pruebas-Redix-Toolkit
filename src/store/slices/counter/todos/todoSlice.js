import { createSlice } from "@reduxjs/toolkit";

export const templateSlice = createSlice({
  name: "name",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = templateSlice.actions;
