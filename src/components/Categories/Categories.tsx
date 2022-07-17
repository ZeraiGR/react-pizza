import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../../redux/slices/filterSlice';
const cats = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state: any) => state.filter.categoryId);

  const onChangeCategory = (id: number) => {
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
