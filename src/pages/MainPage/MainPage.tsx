import Filter from "@/features/movie/filter-movie/ui";
import Header from "@/widgets/Header";
import { MovieList } from "@/entities/movie";
import Pagination from "@/widgets/Pagination";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import {
  selectMovieState,
  selectPaginatedMovies,
  selectTotalPages,
} from "@/entities/movie/model/selectors";
import { setFilter, setPage } from "@/entities/movie/model/slice";
import { useEffect } from "react";
import { fetchMovies } from "@/entities/movie/model/thunk";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectMovieState);
  const paginatedList = useAppSelector(selectPaginatedMovies);
  const pagesAmount = useAppSelector(selectTotalPages);
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className="container">
      <Header />
      <div className="main__app">
        <Filter
          filter={state.filter}
          onFilterChange={(filter) => dispatch(setFilter(filter))}
        />
        <MovieList movies={paginatedList} />
      </div>
      <Pagination
        page={state.page}
        totalPages={pagesAmount}
        onPageChange={(page: number) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default MainPage;
