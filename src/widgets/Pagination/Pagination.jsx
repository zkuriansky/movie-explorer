import _ from "lodash";
import { useContext } from "react";
import { MoviesContext } from "@/entities/movie";

const Pagination = () => {
  const { movies, moviesCount, handlePageChange, currentPage } =
    useContext(MoviesContext);
  const length = movies.length;

  const pageCount = Math.ceil(length / moviesCount);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination__list">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page}>
              <a
                onClick={() => handlePageChange(page)}
                className={`page-item ${page === currentPage ? "active" : ""}`}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
