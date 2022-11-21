import "./pagination.css";

const Pagination = ({ totalProducts, productsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className="pagination-button"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
