import "./pagination.scss";
interface PagiProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PagiProps) => {
  const { page, totalPages, onPageChange } = props;
  return (
    <div className="pagination__list">
      <div className="pagination">
        <button
          className="pagination__btn"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          ← Back
        </button>

        <span className="pagination__info">
          Page {page} from {totalPages || 1}
        </span>

        <button
          className="pagination__btn"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Forward →
        </button>
      </div>
    </div>
  );
};

export default Pagination;
