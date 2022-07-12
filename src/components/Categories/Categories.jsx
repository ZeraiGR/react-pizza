import React from 'react';

export const Categories = ({ category, setCategory, cats }) => {
  const changeCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <div className="categories">
      <ul>
        {cats.map((el, idx) => (
          <li
            key={idx}
            className={category === el ? 'active' : undefined}
            onClick={() => changeCategory(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
