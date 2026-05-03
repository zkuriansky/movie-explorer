import "./filter.scss";
interface FilTypes {
  filter: number | null;
  onFilterChange: (filter: number | null) => void;
}

const Filter = (props: FilTypes) => {
  const { filter, onFilterChange } = props;
  return (
    <div className="filter__container">
      <h2>Options for filter</h2>
      <div className="button__filter-group">
        <button
          className={filter === 5 ? "selected" : ""}
          onClick={() => onFilterChange(5)}
        >
          Show movies with a rating higher than 5
        </button>
        <button
          className={filter === 7 ? "selected" : ""}
          onClick={() => onFilterChange(7)}
        >
          Show movies with a rating higher than 7
        </button>
        <button
          className={filter === 9 ? "selected" : ""}
          onClick={() => onFilterChange(9)}
        >
          Show movies with a rating higher than 9
        </button>
        <button onClick={() => onFilterChange(null)}>Reset filter</button>
      </div>
    </div>
  );
};

export default Filter;
