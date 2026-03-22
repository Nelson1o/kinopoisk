import axios from "axios";

import type { MovieListDto, MovieListData, Movie } from "../types";
import { BASE_URL, API_KEY } from "../constants";

export const MovieListApi = {
  getMovieList: async (pageParam: number, search: string) => {
    return await axios.get<MovieListDto, MovieListData>(
      `${BASE_URL}/v1.4/movie/search`,
      {
        params: {
          query: search,
          page: pageParam,
          limit: 50,
        },
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );
  },

  getMovieById: async (id: string) => {
    return await axios.get<Movie>(`${BASE_URL}/v1.4/movie/${id}`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });
  },
};
