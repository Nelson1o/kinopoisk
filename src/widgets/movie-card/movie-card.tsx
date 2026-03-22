import { useLocation, useNavigate } from "react-router";
import { useState, type MouseEvent } from "react";

import type { Movie } from "@/shared/types";

import styles from "./styles.module.scss";
import { useAppDispatch } from "@/shared/redux/hooks";
import { favoritesSlice } from "@/shared/redux/favoritesSlice";
import { Modal } from "@/shared/ui/modal";
import { compareSlice } from "@/shared/redux/compareSlice";

type MovieCard = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCard) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    navigate(`/movies/${movie.id}`);
  };

  const setFavorite = () => {
    dispatch(favoritesSlice.actions.addFavorites(movie));
    setIsOpen(false);
  };

  const handleAddFavoites = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const handleAddMovieToCompare = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(compareSlice.actions.addMovie(movie));
  };

  return (
    <>
      <div className={styles.card} onClick={handleNavigate}>
        <div className={styles.info}>
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
        <div className={styles.group}>
          {location.pathname !== "/favorites" && (
            <div
              className={styles.favorites}
              onClick={(e: MouseEvent<HTMLDivElement>) => handleAddFavoites(e)}
            >
              Добавить в избранное
            </div>
          )}
          <div
            className={styles.favorites}
            onClick={(e: MouseEvent<HTMLDivElement>) =>
              handleAddMovieToCompare(e)
            }
          >
            Добавить для сравнения
          </div>
        </div>
      </div>
      <Modal active={isOpen} setActive={setIsOpen} setFavorite={setFavorite} />
    </>
  );
};
