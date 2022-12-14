import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { add, CartItem } from '../../redux/slices/cartSlice';
import { selectCartItem } from '../../redux/selectors/cartSelectors';
const typeNames = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
  id: string;
  title: string;
  img: string;
  price: number;
  types: number[];
  sizes: number[];
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, img, price, types, sizes }) => {
  const dispatch = useAppDispatch();

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const item = useAppSelector(selectCartItem(id));
  const counter = item ? item.counter : 0;

  const onAddToCart = () => {
    const item = {
      id,
      title,
      img,
      price,
      type: typeNames[activeType],
      size: sizes[activeSize],
      counter: 1,
    };

    dispatch(add(item));
  };

  return (
    <div className="pizza-block">
      <Link to={'pizzas/' + id}>
        <img className="pizza-block__image" src={img} alt={title} />
      </Link>
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type) => (
            <li
              key={type}
              className={type === activeType || types.length === 1 ? 'active' : undefined}
              onClick={() => setActiveType(type)}>
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={size}
              className={activeSize === i ? 'active' : undefined}
              onClick={() => setActiveSize(i)}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button className="button button--outline button--add" type="button" onClick={onAddToCart}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {counter > 0 && <i>{counter}</i>}
        </button>
      </div>
    </div>
  );
};
