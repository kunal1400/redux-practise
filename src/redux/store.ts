import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from "./postsSlice";
import pokemonReducer from "./pokemonSlice";
import { apiSlice } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    pokemons: pokemonReducer
    // [apiSlice.reducerPath]: apiSlice.reducer
  }
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
