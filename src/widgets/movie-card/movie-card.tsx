import type { Movie } from "@/shared/types";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router";

type MovieCard = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCard) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className={styles.card} onClick={handleNavigate}>
      {movie.poster?.previewUrl ? (
        <img
          src={movie.poster?.previewUrl}
          alt="movie poster"
          className={styles.poster}
          width={150}
          height={200}
        />
      ) : (
        <div className={styles.skeleton}></div>
      )}
      <div className={styles.title}>{movie.name}</div>
      <div className={styles.year}>Год выпуска: {movie.year}</div>
      <div className={styles.rating}>Рейтинг: {movie.rating.imdb}</div>
    </div>
  );
};
