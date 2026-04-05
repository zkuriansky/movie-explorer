import MovieItem from "./MovieItem";
import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const MovieList = () => {
  const { moviesCrop, movies } = useContext(MoviesContext);

  if (movies.length === 0) {
    return <div className="filter__err-message">There are no movies</div>;
  }

  return (
    <div className="movies__container">
      {moviesCrop.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
