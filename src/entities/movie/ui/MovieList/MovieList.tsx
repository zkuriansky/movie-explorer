import { useContext } from "react";
import { MoviesContext } from "@/entities/movie";
import MovieItem from "../MovieItem";
import "./movie-list.scss";

const MovieList = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("Error getting context in MovieList");
  const { moviesCrop, movies } = context;

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
