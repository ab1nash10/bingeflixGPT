import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Slices/moviesSlice";
import userReducer from "./Slices/userSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
