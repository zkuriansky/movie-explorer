import { createContext, useState, useEffect } from "react";
import usePaginate from "@/features/paginate-movie";
import useFilter from "@/features/filter-movie";
import moviesAPI from "@/shared/api/movie";

export const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const { currentPage, setCurrentPage, paginate } = usePaginate();
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState();
  const [movieRating, setMovieRating] = useState();
  const [movieGenre, setMovieGenre] = useState("");
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

  const addMovie = async (title, year, rating, genre) => {
    try {
      const newMovie = {
        title: title.trim(),
        year: year.trim(),
        rating: rating.trim(),
        genre: genre.trim(),
      };
      const addedMovie = await moviesAPI.add(newMovie);
      setMovies((prevState) => [...prevState, addedMovie]);
      setMovieTitle("");
      setMovieYear("");
      setMovieRating("");
      setMovieGenre("");
    } catch (error) {
      console.log(error);
    }
  };

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
        movieTitle,
        setMovieTitle,
        movieYear,
        setMovieYear,
        movieRating,
        setMovieRating,
        movieGenre,
        setMovieGenre,
        addMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
