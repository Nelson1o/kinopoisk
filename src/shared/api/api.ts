import axios from "axios";

import type { MovieListDto, MovieListData, Movie, MovieFilter } from "../types";
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

  getMovieWithFilter: async (
    genre: string = "",
    year: string = "",
    rating: string = ""
  ) => {
    return await axios.get<MovieFilter>(
      `${BASE_URL}/v1.5/movie?&limit=50${year && "&year=" + year}${rating && "&ageRating=" + rating}${genre && "&genres.name=" + genre}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );
  },
};
