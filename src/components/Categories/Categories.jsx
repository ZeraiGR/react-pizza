import React from 'react';

const cats = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories = () => {
  const [category, setCategory] = React.useState('Все');

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
