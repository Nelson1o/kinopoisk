import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Movie } from "../types";

type CompareState = {
  movie: Movie[];
};

const initialState: CompareState = {
  movie: [],
};

export const compareSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      const hasId = state.movie.some((item) => item.id === action.payload.id);
      if (hasId) {
        return;
      }

      if (state.movie.length >= 2) {
        state.movie.shift();
      }

      state.movie.push(action.payload);
    },
  },
});
