import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../common/Search/Search';
import { useSelector } from 'react-redux/es/exports';
import { selectTotalPrice, selectTotalCartItems } from '../../redux/selectors/cartSelectors';

import { HeaderCart } from './HeaderCart';
import logo from '../../assets/img/pizza-logo.svg';

export const Header: React.FC = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalCartItems);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img width={38} src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        {location.pathname !== '/cart' && <Search />}
        <HeaderCart totalPrice={totalPrice} totalItems={totalItems} />
      </div>
    </header>
  );
};
