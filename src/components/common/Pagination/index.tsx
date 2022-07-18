import React from 'react';
import ReactPaginate from 'react-paginate';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setPage } from '../../../redux/slices/filterSlice';
import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const { total } = useAppSelector((state) => state.product);
  const { page, limit } = useAppSelector((state) => state.filter);
  const pages = Math.ceil(total / limit);

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
