import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
