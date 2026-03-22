import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { MovieActors, MovieInfo } from "./ui";
import { MovieListApi } from "@/shared/api/api";

import styles from "./styles.module.scss";

export const MoviePage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => MovieListApi.getMovieById(id ?? ""),
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <span className={styles.loader}></span>
      </div>
    );
  }

  return (
    <section className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.poster}>
          <img
            src={data?.data.poster.previewUrl}
            alt="Movie poster"
            className=""
            width={300}
            height={450}
          />
        </div>
        <div className={styles.movie}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              {data?.data.name} {`(${data?.data.year})`}
            </h1>
            <span className={styles.subtitle}>
              {data?.data.alternativeName}
            </span>
          </div>
          <div className={styles.info}>
            <div className={styles.about}>
              <MovieInfo {...data?.data} />
            </div>
            <div className={styles.actors}>
              <MovieActors actors={data?.data.persons} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
