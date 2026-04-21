import type { Dispatch, SetStateAction } from "react";
import type { DataTypes } from "@/entities/movie/types/data-types";

type PropTypes = {
  data: DataTypes[];
  movies: DataTypes[];
  setMovies: Dispatch<SetStateAction<DataTypes[]>>;
  setCurrentPage: (page: number) => void;
};

const useFilter = ({ data, setMovies, setCurrentPage, movies }: PropTypes) => {
  const handleFilterMovies = (param: number) => {
    const filtered = data.filter((movie: DataTypes) => movie.rating >= param);
    setMovies(filtered);
    setCurrentPage(1);
  };

  const isFilterActive = movies.length !== data.length;

  const handleResetFilter = () => {
    setMovies(data);
    setCurrentPage(1);
  };
  return { handleFilterMovies, handleResetFilter, isFilterActive };
};

export default useFilter;
