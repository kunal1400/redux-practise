import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from "./postsSlice";
import { PokemonApi } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    [PokemonApi.reducerPath]: PokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PokemonApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
