import { useAppSelector } from "@/shared/redux/hooks";

import styles from "./styles.module.scss";
import { MovieCard } from "@/widgets/movie-card";
import { favoritesSlice } from "@/shared/redux/favoritesSlice";

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
