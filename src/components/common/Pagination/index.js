import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

export const Pagination = ({ limit, total, setPage }) => {
  const pages = Math.ceil(total / limit);

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={limit}
        pageCount={pages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
