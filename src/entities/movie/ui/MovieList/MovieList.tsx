import { type DataTypes } from "@/entities/movie";
import MovieItem from "../MovieItem";
import "./movie-list.scss";
interface ListProps {
  movies: DataTypes[];
}

const MovieList = (props: ListProps) => {
  const { movies } = props;

  if (movies.length === 0) {
    return <div className="filter__err-message">There are no movies</div>;
  }

  return (
    <div className="movies__container">
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
