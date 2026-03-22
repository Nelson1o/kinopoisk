import { MovieCard } from "@/widgets/movie-card";
import { useIntesection } from "@/shared/hooks";

import styles from "./styles.module.scss";
import type { MovieDto } from "@/shared/types";

type MovieListProps = {
  list?: MovieDto[];
  fetchNextPage: () => void;
};

export const MovieList = ({ list, fetchNextPage }: MovieListProps) => {
  const cursorRef = useIntesection(() => {
    fetchNextPage();
  });

  return (
    <section className={styles.list}>
      <div className={styles.wrapper}>
        {list?.map((page) =>
          page.docs.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
      <div ref={cursorRef}></div>
    </section>
  );
};
