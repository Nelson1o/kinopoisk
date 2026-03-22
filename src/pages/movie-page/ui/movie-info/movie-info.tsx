import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

import { FieldValue } from "../field-value";
import { convertArrayToString } from "../../lib";
import type { Movie } from "@/shared/types";

import styles from "./styles.module.scss";

type MovieInfoProps = Partial<Movie>;

export const MovieInfo = ({
  year,
  countries,
  genres,
  budget,
  fees,
  premiere,
  ageRating,
  movieLength,
}: MovieInfoProps) => (
  <>
    <h3 className={styles.title}>О фильме</h3>
    <FieldValue name="Год производства" value={year} />
    {countries?.length !== 0 && (
      <FieldValue name="Страна" value={convertArrayToString(countries || [])} />
    )}
    {genres?.length !== 0 && (
      <FieldValue name="Жанр" value={convertArrayToString(genres || [])} />
    )}
    {budget?.value && (
      <FieldValue
        name="Бюджет"
        value={`${budget?.value} ${budget?.currency}`}
      />
    )}
    {fees?.world.value && (
      <FieldValue
        name="Сборы"
        value={`${fees?.world.value} ${fees?.world.currency}`}
      />
    )}
    {premiere?.world && (
      <FieldValue
        name="Премьера"
        value={format(parseISO(premiere?.world), "d MMMM yyyy", {
          locale: ru,
        })}
      />
    )}
    {ageRating && <FieldValue name="Возраст" value={`${ageRating}+`} />}
    {movieLength && (
      <FieldValue name="Время" value={`${movieLength?.toString()} мин`} />
    )}
  </>
);
