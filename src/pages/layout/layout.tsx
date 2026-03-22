import { useState, type ChangeEvent } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router";

import { Header } from "@/widgets/header";
import { MovieList } from "../movie-list";
import { useDebounce } from "@/shared/hooks";

import styles from "./styles.module.scss";
import { MovieListApi } from "@/shared/api/api";

export const Layout = () => {
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce({ value: searchValue, delay: 500 });

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["list", "movies", debouncedSearch],
    queryFn: (meta) =>
      MovieListApi.getMovieList(meta.pageParam, debouncedSearch),
    enabled: location.pathname === "/" && searchValue.length > 3,
    select: (data) => data.pages.flatMap((page) => page.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.data.page < lastPage.data.pages
        ? lastPage.data.page + 1
        : undefined;
    },
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
            <MovieList list={data} fetchNextPage={fetchNextPage} />
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </>
  );
};
