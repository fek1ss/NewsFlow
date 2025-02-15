import styles from './styles.module.css';

const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handlePage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              onClick={() => handlePage(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        disabled={currentPage >= 10}
        onClick={handleNextPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
