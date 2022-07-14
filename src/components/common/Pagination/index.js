import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../../../redux/slices/productSlice';
import styles from './Pagination.module.scss';

export const Pagination = () => {
  const { total, limit } = useSelector((state) => state.product);
  const pages = Math.ceil(total / limit);

  const dispatch = useDispatch();

  const changePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => changePage(e.selected + 1)}
        pageRangeDisplayed={limit}
        pageCount={pages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
