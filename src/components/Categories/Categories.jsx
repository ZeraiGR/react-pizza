import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../../redux/slices/filterSlice';
const cats = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {cats.map((cat, idx) => (
          <li
            key={idx}
            className={categoryId === idx ? 'active' : undefined}
            onClick={() => onChangeCategory(idx)}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};
