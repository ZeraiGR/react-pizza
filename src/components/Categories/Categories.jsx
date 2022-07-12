import React from 'react';

const cats = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = ({ categoryId, onChangeCategory }) => {
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
