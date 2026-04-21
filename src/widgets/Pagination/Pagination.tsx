import { useContext } from "react";
import _ from "lodash";
import { MoviesContext } from "@/entities/movie";
import "./pagination.scss";

const Pagination = () => {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("Error getting context in Pagination");
  const { movies, moviesCount, handlePageChange, currentPage } = context;
  const length = movies.length;

  const pageCount = Math.ceil(length / moviesCount);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination__list">
      <ul className="pagination">
        {pages.map((page: number) => {
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
