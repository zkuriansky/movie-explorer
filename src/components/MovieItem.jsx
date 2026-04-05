import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const MovieItem = (props) => {
  const { title, year, rating, genre } = props;
  return (
    <div className="movie__item">
      <h3 className="movie__title">{title}</h3>
      <p className="movie__info">{year}</p>
      <p className="movie__info">{rating}</p>
      <p className="movie__info">{genre}</p>
    </div>
  );
};

export default MovieItem;
