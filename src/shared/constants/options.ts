import type { Option } from "../types";

export const GENRE: Option[] = [
  { value: "", label: "Все жанры" },
  { value: "драма", label: "Драма" },
  { value: "комедия", label: "Комедия" },
  { value: "мелодрама", label: "Мелодрама" },
  { value: "криминал", label: "Криминал" },
  { value: "ужасы", label: "Ужасы" },
];

export const YEAR: Option[] = [
  { value: "", label: "Все годы" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2010-2019", label: "2010-2019" },
  { value: "2000-2009", label: "2000-2009" },
  { value: "1990-1999", label: "1990-1999" },
  { value: "1980-1989", label: "1980-1989" },
  { value: "1970-1979", label: "1970-1979" },
  { value: "1960-1969", label: "1960-1969" },
  { value: "1950-1959", label: "1950-1959" },
  { value: "1940-1949", label: "1940-1949" },
  { value: "1930-1939", label: "1930-1939" },
];

export const RATING: Option[] = [
  { value: "", label: "Для всей семьи" },
  { value: "6-18", label: "6+" },
  { value: "12-18", label: "12+" },
  { value: "18", label: "18+" },
];
