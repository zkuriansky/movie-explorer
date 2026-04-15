import { useEffect, useState } from "react";
import moviesAPI from "../api/movies.api";
import { useParams } from "react-router";

const MoviePage = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await moviesAPI.getById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="info__page">
      <div className="info__container">
        <h2 className="info__title">{movie.title}</h2>

        <div className="info__meta">
          <p>
            <span>Year:</span> {movie.year}
          </p>
          <p>
            <span>Rating:</span> {movie.rating}
          </p>
          <p>
            <span>Genre:</span> {movie.genre}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
