import { createBrowserRouter } from "react-router";

import { Layout } from "@/pages/layout";
import { NotFound } from "@/pages/not-found";
import { MoviePage } from "@/pages/movie-page";
import { Favorites } from "@/pages/favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "movies/:id",
        element: <MoviePage />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
