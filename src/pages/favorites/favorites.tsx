import { MovieCard } from "@/widgets/movie-card";
import { useAppSelector } from "@/shared/redux/hooks";
import { favoritesSlice } from "@/shared/redux/favoritesSlice";

import styles from "./styles.module.scss";

export const Favorites = () => {
  const favoritesMovie = useAppSelector(favoritesSlice.selectors.selectMovies);

  return (
    <section className={styles.favorites}>
      <h2 className={styles.title}>Избранные фильмы</h2>
      <div className={styles.wrapper}>
        {favoritesMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
