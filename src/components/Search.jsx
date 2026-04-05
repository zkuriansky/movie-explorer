import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(MoviesContext);
  return (
    <div className="header__form">
      <input
        type="text"
        id="headerInput"
        placeholder=""
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <label htmlFor="headerInput">Search film</label>
    </div>
  );
};

export default Search;
