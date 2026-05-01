import { useContext, useState, type ChangeEvent } from "react";
import { Link } from "react-router";
import { MoviesContext } from "@/entities/movie";
import Input from "@/shared/ui/Input";
import "./form-add-page.scss";

const FormAddPage = () => {
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieYear, setMovieYear] = useState<number | null>(null);
  const [movieRating, setMovieRating] = useState<number | null>(null);
  const [movieGenre, setMovieGenre] = useState<string>("");
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("Error getting context in FormAdd");
  }
  const { addMovie } = context;
  const onInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMovieTitle(value);
  };
  const onInputYear = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMovieYear(value ? Number(value) : null);
  };
  const onInputRating = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMovieRating(value ? Number(value) : null);
  };
  const onInputGenre = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMovieGenre(value);
  };
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (movieYear === null || movieRating === null) return;
    addMovie(movieTitle, movieYear, movieRating, movieGenre);
    (setMovieGenre(""),
      setMovieRating(null),
      setMovieTitle(""),
      setMovieYear(null));
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
              value={movieYear ?? ""}
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
              value={movieRating ?? ""}
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
