import React, { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Input from "./Input";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(MoviesContext);
  const [error, setError] = useState("");
  const onInput = (event) => {
    const { value } = event.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;
    setSearchQuery(value);
    setError(hasOnlySpaces ? "Field cannot be empty" : "");
  };
  return (
    <div className="header__form">
      <Input id="headerInput" value={searchQuery} onChange={onInput}>
        Search film
      </Input>
      {error && <span className="search__error">{error}</span>}
    </div>
  );
};

export default Search;
