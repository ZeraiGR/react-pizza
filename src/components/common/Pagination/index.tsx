import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
  const { total, limit } = useSelector((state: any) => state.product);
  const { page } = useSelector((state: any) => state.filter);
  const pages = Math.ceil(total / limit);

  const dispatch = useDispatch();

  const changePage = (page: number) => {
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
        forcePage={page - 1}
        previousLabel="<"
      />
    </>
  );
};
