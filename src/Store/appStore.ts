import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./Slices/configSlice";
import gptReducer from "./Slices/gptSlice";
import moviesReducer from "./Slices/moviesSlice";
import userReducer from "./Slices/userSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
