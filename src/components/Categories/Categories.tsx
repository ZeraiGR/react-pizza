import React from 'react';

import { useAppDispatch } from '../../hooks/hooks';
import { setCategoryId } from '../../redux/slices/filterSlice';

type cartArr = string[];
const cats: cartArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

type CategoriesProps = {
  categoryId: number;
};

export const Categories: React.FC<CategoriesProps> = React.memo(({ categoryId }) => {
  const dispatch = useAppDispatch();

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
});
