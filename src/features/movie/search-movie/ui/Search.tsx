import { useState, type ChangeEvent } from "react";
import Input from "@/shared/ui/Input";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setSearch } from "@/entities/movie/model/slice";
import "./search.scss";

const Search = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.movies.search);
  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const trimmed = value.trim();

    const hasOnlySpaces = value.length > 0 && trimmed.length === 0;

    dispatch(setSearch(value));
    setError(hasOnlySpaces ? "Field cannot be empty" : "");
  };
  const [error, setError] = useState("");
  return (
    <div className="header__form">
      <Input id="headerInput" value={search} onChange={onInput}>
        Search film
      </Input>
      {error && <span className="search__error">{error}</span>}
    </div>
  );
};

export default Search;
