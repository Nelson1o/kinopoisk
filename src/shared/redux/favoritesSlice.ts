import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Movie } from "../types";

type FavoritesState = {
  movie: Movie[];
};

const initialState: FavoritesState = {
  movie: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Movie>) => {
      state.movie.push(action.payload);
    },
  },
  selectors: {
    selectMovies: (state) => {
      const idMovies = new Set(state.movie.map((movie) => movie.id));

      return state.movie.filter((movie) => {
        if (idMovies.has(movie.id)) {
          idMovies.delete(movie.id);
          return true;
        } else {
          return false;
        }
      });
    },
  },
});
