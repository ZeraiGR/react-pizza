import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { DefaultLayout } from './layouts/DefaultLayout';
import { SingleProduct } from './pages/SingleProduct';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizzas/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
