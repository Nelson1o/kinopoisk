import Select, { type SingleValue } from "react-select";

import { GENRE, RATING, YEAR } from "@/shared/constants";
import type { Option } from "@/shared/types";

import styles from "./styles.module.scss";

type FiltersProps = {
  genreValue: SingleValue<Option>;
  yearValue: SingleValue<Option>;
  ratingValue: SingleValue<Option>;
  onChangeGenre: (option: SingleValue<Option>) => void;
  onChangeYear: (option: SingleValue<Option>) => void;
  onChangeRating: (option: SingleValue<Option>) => void;
};

export const Filters = ({
  genreValue,
  ratingValue,
  yearValue,
  onChangeGenre,
  onChangeYear,
  onChangeRating,
}: FiltersProps) => {
  return (
    <div className={styles.filter}>
      <Select
        className={styles.select}
        value={genreValue}
        onChange={onChangeGenre}
        options={GENRE}
        placeholder="Выберите жанр"
      />
      <Select
        className={styles.select}
        value={yearValue}
        onChange={onChangeYear}
        options={YEAR}
        placeholder="Выберите год"
      />
      <Select
        className={styles.select}
        value={ratingValue}
        onChange={onChangeRating}
        options={RATING}
        placeholder="Выберите рейтинг"
      />
    </div>
  );
};
