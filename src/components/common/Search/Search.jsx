import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Search.module.scss';
import { setSearch } from '../../../redux/slices/filterSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filter.search);

  const updateSearch = (search) => {
    dispatch(setSearch(search));
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.searchIcon}
        height="512px"
        width="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
      </svg>
      <input
        className={styles.input}
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
        type="search"
        placeholder="Поиск..."
      />
      {search && (
        <svg
          className={styles.closeIcon}
          onClick={() => updateSearch('')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512">
          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
        </svg>
      )}
    </div>
  );
};
