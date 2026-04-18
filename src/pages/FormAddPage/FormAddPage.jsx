import { useContext } from "react";
import { Link } from "react-router";
import { MoviesContext } from "@/entities/movie";
import Input from "@/shared/ui/Input";
import "./form-add-page.scss";

const FormAddPage = () => {
  const {
    movieTitle,
    setMovieTitle,
    movieYear,
    setMovieYear,
    movieRating,
    setMovieRating,
    movieGenre,
    setMovieGenre,
    addMovie,
  } = useContext(MoviesContext);
  const onInputTitle = (event) => {
    const { value } = event.target;
    setMovieTitle(value);
  };
  const onInputYear = (event) => {
    const { value } = event.target;
    setMovieYear(value);
  };
  const onInputRating = (event) => {
    const { value } = event.target;
    setMovieRating(value);
  };
  const onInputGenre = (event) => {
    const { value } = event.target;
    setMovieGenre(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(movieTitle, movieYear, movieRating, movieGenre);
  };
  return (
    <form className="form__page" onSubmit={handleSubmit}>
      <div className="form__container">
        <div className="form__title">
          <h2>Add new film</h2>
        </div>
        <div className="form__inputs">
          <div className="form__input-title">
            <Input id="movieTitle" value={movieTitle} onChange={onInputTitle}>
              Movie title:{" "}
            </Input>
          </div>
          <div className="form__input-year">
            <Input
              id="movieYear"
              type="number"
              value={movieYear}
              onChange={onInputYear}
            >
              Movie year:
            </Input>
          </div>
          <div className="form__input-rating">
            <Input
              id="movieRating"
              type="range"
              min="1"
              max="10"
              step="0.1"
              value={movieRating}
              onChange={onInputRating}
            ></Input>
          </div>
          <div className="form__input-genre">
            <Input id="movieGenre" value={movieGenre} onChange={onInputGenre}>
              Movie genre:
            </Input>
          </div>
        </div>
        <button className="form__button-add">Add</button>
        <Link to="/">Back to main</Link>
      </div>
    </form>
  );
};

export default FormAddPage;
