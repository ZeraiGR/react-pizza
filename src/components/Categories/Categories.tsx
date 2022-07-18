import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCategoryId } from '../../redux/slices/filterSlice';

type cartArr = string[];

const cats: cartArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC = () => {
  const dispatch = useAppDispatch();

  const categoryId = useAppSelector((state) => state.filter.categoryId);

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
