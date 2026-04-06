import { createContext, useState } from "react";
import data from "../data/movies";
import usePaginate from "../hooks/usePaginate";
import useFilter from "../hooks/useFilter";

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const { currentPage, setCurrentPage, paginate } = usePaginate();
  const [movies, setMovies] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const moviesCount = 8;

  const clearSearchQuery = searchQuery.trim().toLowerCase();

  const allFilteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(clearSearchQuery),
  );

  const moviesCrop = paginate(allFilteredMovies, currentPage, moviesCount);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const { handleFilterMovies, handleResetFilter } = useFilter({
    data,
    setMovies,
    setCurrentPage,
  });

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies: allFilteredMovies,
        moviesCrop,
        currentPage,
        setCurrentPage,
        moviesCount,
        searchQuery,
        setSearchQuery: handleSearch,
        handleFilterMovies,
        handleResetFilter,
        handlePageChange,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
