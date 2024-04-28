import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGPT: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleShowGPT: (state) => {
      state.toggleGPT = !state.toggleGPT;
    },

    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleShowGPT, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
