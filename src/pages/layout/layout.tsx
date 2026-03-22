import { useState, type ChangeEvent } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router";

import { MovieList } from "../movie-list";
import { Header } from "@/widgets/header";
import { Filters } from "@/features/filters";
import { useDebounce } from "@/shared/hooks";

import styles from "./styles.module.scss";
import { MovieListApi } from "@/shared/api/api";
import type { Option } from "@/shared/types";
import type { SingleValue } from "react-select";

export const Layout = () => {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce({ value: searchValue, delay: 500 });

  const [selectGenre, setSelectGenre] = useState<SingleValue<Option>>(null);
  const [selectYear, setSelectYear] = useState<SingleValue<Option>>(null);
  const [selectRating, setSelectRating] = useState<SingleValue<Option>>(null);

  const handleChangeGenre = (option: SingleValue<Option>) => {
    setSelectGenre(option);
  };

  const handleChangeYear = (option: SingleValue<Option>) => {
    setSelectYear(option);
  };

  const handleChangeRating = (option: SingleValue<Option>) => {
    setSelectRating(option);
  };

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["list", "movies", debouncedSearch],
    queryFn: (meta) =>
      MovieListApi.getMovieList(meta.pageParam, debouncedSearch),
    enabled: location.pathname === "/" && searchValue.length > 3,
    select: (data) => data.pages.flatMap((page) => page.data),
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.data.page < lastPage.data.pages
        ? lastPage.data.page + 1
        : undefined;
    },
  });

  const { data: filterData } = useQuery({
    queryKey: ["list", "movies", selectGenre, selectYear, selectRating],
    queryFn: () =>
      MovieListApi.getMovieWithFilter(
        selectGenre?.value,
        selectYear?.value,
        selectRating?.value
      ),
    enabled:
      selectGenre !== null || selectYear !== null || selectRating !== null,
    select: (data) => data.data?.docs,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Header
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      <main className={styles.layout}>
        <div className="container">
          {location.pathname === "/" ? (
            <>
              <Filters
                genreValue={selectGenre}
                yearValue={selectYear}
                ratingValue={selectRating}
                onChangeGenre={handleChangeGenre}
                onChangeYear={handleChangeYear}
                onChangeRating={handleChangeRating}
              />
              <MovieList
                list={data}
                filterList={filterData}
                fetchNextPage={fetchNextPage}
              />
            </>
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </>
  );
};
