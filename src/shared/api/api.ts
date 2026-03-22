import axios from "axios";

import type { MovieListDto, MovieListData, Movie, MovieFilter } from "../types";
import { BASE_URL } from "../constants";
import { HEADERS } from "../config";

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
        headers: HEADERS,
      }
    );
  },

  getMovieById: async (id: string) => {
    return await axios.get<Movie>(`${BASE_URL}/v1.4/movie/${id}`, {
      headers: HEADERS,
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
        headers: HEADERS,
      }
    );
  },
};
