import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./favoritesSlice";
import { loadState, saveState } from "../hooks";
import { compareSlice } from "./compareSlice";

const persistedState = loadState();

const rootReducer = combineReducers({
  favorites: favoritesSlice.reducer,
  compare: compareSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites,
    compare: store.getState().compare,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
