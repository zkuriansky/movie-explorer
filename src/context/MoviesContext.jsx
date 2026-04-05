import { createContext, useState } from "react";
import data from "../data/movies";

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(data); 
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesCount = 8;

  const clearSearchQuery = searchQuery.trim().toLowerCase();

  const allFilteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(clearSearchQuery),
  );

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const moviesCrop = paginate(allFilteredMovies, currentPage, moviesCount);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handleFilterMovies = (param) => {
    const filtered = data.filter((movie) => movie.rating >= param);
    setMovies(filtered);
    setCurrentPage(1);
  };

  const handleResetFilter = () => {
    setMovies(data);
    setCurrentPage(1);
  };

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
