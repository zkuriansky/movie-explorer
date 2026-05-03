import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "@/entities/movie/model/slice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
