import React, { useContext } from "react";
import { MoviesContext } from "@/entities/movie";

const Filter = () => {
  const { handleFilterMovies, handleResetFilter, isFilterActive } =
    useContext(MoviesContext);
  const filterParams = [5, 7, 9];
  return (
    <div className="filter__container">
      <h2>Options for filter</h2>
      <div className="button__filter-group">
        {filterParams.map((param) => {
          return (
            <button
              key={param}
              type="button"
              onClick={() => handleFilterMovies(param)}
            >
              Show movies with a rating higher than {param}
            </button>
          );
        })}
        <button
          type="button"
          onClick={handleResetFilter}
          disabled={!isFilterActive}
        >
          Reset filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
