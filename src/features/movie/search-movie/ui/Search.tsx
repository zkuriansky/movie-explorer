import { useContext, useState, type ChangeEvent } from "react";
import { MoviesContext } from "@/entities/movie";
import Input from "@/shared/ui/Input";
import "./search.scss";

const Search = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("Error getting context in Search");
  }
  const { searchQuery, setSearchQuery } = context;
  const [error, setError] = useState("");
  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
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
