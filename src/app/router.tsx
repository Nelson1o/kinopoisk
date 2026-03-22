import { createBrowserRouter } from "react-router";
import { Layout } from "@/pages/layout";
import { NotFound } from "@/pages/not-found";
import { MovieList } from "@/pages/movie-list";
import { MoviePage } from "@/pages/movie-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "movies",
        element: <MovieList />,
      },
      {
        path: "movies/:id",
        element: <MoviePage />,
      },
    ],
  },
]);
