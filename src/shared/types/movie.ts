export type Actor = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  name: string;
  alternativeName: string;
  year: number;
  description: string;
  shortDescription: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    kp: number;
    imdb: number;
  };
  premiere: {
    world: string;
    russia: string;
  };
  genres: {
    name: string;
  }[];
  slogan: string;
  countries: {
    name: string;
  }[];
  budget: {
    currency: string;
    value: number;
  };
  fees: {
    world: {
      currency: string;
      value: number;
    };
    russia: {
      currency: string;
      value: number;
    };
    usa: {
      currency: string;
      value: number;
    };
  };
  ageRating: number;
  movieLength: number;
  persons: Actor[];
};

export type MovieDto = {
  docs: Movie[];
  total: number;
  page: number;
  pages: number;
};

export type MovieListData = {
  data: MovieDto;
};

export type MovieListDto = {
  pageParams: number[];
  pages: MovieListData[];
};
