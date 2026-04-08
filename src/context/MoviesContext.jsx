import { createContext, useState, useEffect } from "react";
import usePaginate from "../hooks/usePaginate";
import useFilter from "../hooks/useFilter";
import moviesAPI from "../api/movies.api";

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const { currentPage, setCurrentPage, paginate } = usePaginate();
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const moviesCount = 8;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await moviesAPI.getAll();
        setMovies(data);
        setAllMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const clearSearchQuery = searchQuery.trim().toLowerCase();

  const allFilteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(clearSearchQuery),
  );

  const moviesCrop = paginate(allFilteredMovies, currentPage, moviesCount);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const { handleFilterMovies, handleResetFilter, isFilterActive } = useFilter({
    data: allMovies,
    setMovies,
    setCurrentPage,
    movies,
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
        isFilterActive,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
