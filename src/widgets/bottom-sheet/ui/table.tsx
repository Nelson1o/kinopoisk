import { useAppSelector } from "@/shared/redux/hooks";
import { convertArrayToString } from "@/shared/lib";

import styles from "./styles.module.scss";

export const Table = () => {
  const [firstMovie, secondMovie] = useAppSelector(
    (state) => state.compare.movie
  );

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>{firstMovie.name}</th>
            <th>{secondMovie.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.featureName}>Год выпуска</td>
            <td>{firstMovie.year}</td>
            <td>{secondMovie.year}</td>
          </tr>
          <tr>
            <td className={styles.featureName}>Рейтинг</td>
            <td>{firstMovie.rating.imdb ? firstMovie.rating.imdb : "-"}</td>
            <td>{secondMovie.rating.imdb ? secondMovie.rating.imdb : "-"}</td>
          </tr>
          <tr>
            <td className={styles.featureName}>Жанры</td>
            <td>
              {firstMovie.genres?.length !== 0
                ? convertArrayToString(firstMovie.genres)
                : "-"}
            </td>
            <td>
              {secondMovie.genres?.length !== 0
                ? convertArrayToString(secondMovie.genres)
                : "-"}
            </td>
          </tr>
          <tr>
            <td className={styles.featureName}>Длительность</td>
            <td>
              {firstMovie.movieLength
                ? `${firstMovie.movieLength?.toString()} мин`
                : "-"}
            </td>
            <td>
              {secondMovie.movieLength
                ? `${secondMovie.movieLength?.toString()} мин`
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
