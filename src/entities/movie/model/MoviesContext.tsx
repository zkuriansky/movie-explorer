import { createContext, useState, useEffect, type ReactNode } from "react";
import type { DataTypes } from "@/entities/movie/types/data-types";
import usePaginate from "@/features/movie/paginate-movie";
import useFilter from "@/features/movie/filter-movie/model";
import moviesAPI from "@/shared/api/movie";

export const MoviesContext = createContext<MoviesContextType | null>(null);

type PropsType = {
  children: ReactNode;
};

type MoviesContextType = {
  movies: DataTypes[];
  moviesCrop: DataTypes[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  moviesCount: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleFilterMovies: (param: number) => void;
  handleResetFilter: () => void;
  handlePageChange: (pageIndex: number) => void;
  isFilterActive: boolean;
  movieTitle: string;
  setMovieTitle: (value: string) => void;
  movieYear: number | null;
  setMovieYear: (value: number | null) => void;
  movieRating: number | null;
  setMovieRating: (value: number | null) => void;
  movieGenre: string;
  setMovieGenre: (value: string) => void;
  addMovie: (
    title: string,
    year: number,
    rating: number,
    genre: string,
  ) => Promise<void>;
};

export const MoviesProvider = ({ children }: PropsType) => {
  const { currentPage, setCurrentPage, paginate } = usePaginate();
  const [movies, setMovies] = useState<DataTypes[]>([]);
  const [allMovies, setAllMovies] = useState<DataTypes[]>([]);
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieYear, setMovieYear] = useState<number | null>(null);
  const [movieRating, setMovieRating] = useState<number | null>(null);
  const [movieGenre, setMovieGenre] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const moviesCount: number = 8;

  useEffect(() => {
    const fetchTasks: () => Promise<void> = async () => {
      try {
        const data: DataTypes[] = await moviesAPI.getAll();
        setMovies(data);
        setAllMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const addMovie = async (
    title: string,
    year: number,
    rating: number,
    genre: string,
  ) => {
    try {
      const newMovie = {
        title: title.trim(),
        year: year,
        rating: rating,
        genre: genre.trim(),
      };
      const addedMovie = await moviesAPI.add(newMovie);
      setMovies((prevState) => [...prevState, addedMovie]);
      setMovieTitle("");
      setMovieYear(null);
      setMovieRating(null);
      setMovieGenre("");
    } catch (error) {
      console.log(error);
    }
  };

  const clearSearchQuery = searchQuery.trim().toLowerCase();

  const allFilteredMovies = movies.filter((movie: DataTypes) =>
    movie.title.toLowerCase().includes(clearSearchQuery),
  );

  const moviesCrop: DataTypes[] = paginate(
    allFilteredMovies,
    currentPage,
    moviesCount,
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const { handleFilterMovies, handleResetFilter, isFilterActive } = useFilter({
    data: allMovies,
    setMovies,
    setCurrentPage,
    movies,
  });

  const handlePageChange = (pageIndex: number) => {
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
