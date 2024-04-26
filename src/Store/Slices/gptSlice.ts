import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGPT: false,
  },
  reducers: {
    toggleShowGPT: (state) => {
      state.toggleGPT = !state.toggleGPT;
    },
  },
});

export const { toggleShowGPT } = gptSlice.actions;
export default gptSlice.reducer;
