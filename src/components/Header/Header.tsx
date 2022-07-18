import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../common/Search/Search';
import { selectTotalPrice, selectTotalCartItems } from '../../redux/selectors/cartSelectors';

import { HeaderCart } from './HeaderCart';
import logo from '../../assets/img/pizza-logo.svg';
import { useAppSelector } from '../../hooks/hooks';
import { selectItems } from '../../redux/selectors/cartSelectors';

export const Header: React.FC = () => {
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalItems = useAppSelector(selectTotalCartItems);
  const cartItems = useAppSelector(selectItems);
  const location = useLocation();
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const savedItems = JSON.stringify(cartItems);
      window.localStorage.setItem('cart', savedItems);
    }

    isMounted.current = true;
  }, [cartItems]);

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
