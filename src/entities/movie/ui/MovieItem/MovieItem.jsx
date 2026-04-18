import React, { useContext } from "react";
import { Link } from "react-router";

const MovieItem = (props) => {
  const { title, year, rating, genre, id } = props;
  return (
    <div className="movie__item">
      <Link className="movie__title" to={`/movies/${id}`}>
        {title}
      </Link>
      <p className="movie__info">{year}</p>
      <p className="movie__info">{rating}</p>
      <p className="movie__info">{genre}</p>
    </div>
  );
};

export default MovieItem;
