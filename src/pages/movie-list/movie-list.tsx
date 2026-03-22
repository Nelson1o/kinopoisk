import { MovieCard } from "@/widgets/movie-card";
import { useIntesection } from "@/shared/hooks";

import styles from "./styles.module.scss";
import type { Movie, MovieDto } from "@/shared/types";

type MovieListProps = {
  list?: MovieDto[];
  filterList?: Movie[];
  fetchNextPage: () => void;
};

export const MovieList = ({
  list,
  filterList,
  fetchNextPage,
}: MovieListProps) => {
  const cursorRef = useIntesection(() => {
    fetchNextPage();
  });

  return (
    <section className={styles.list}>
      <div className={styles.wrapper}>
        {filterList !== undefined
          ? filterList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          : list?.map((page) =>
              page.docs.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            )}
      </div>
      <div ref={cursorRef}></div>
    </section>
  );
};
