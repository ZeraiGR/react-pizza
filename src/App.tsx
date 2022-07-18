import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';

const Cart = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/Cart').then((m) => ({
    default: m.Cart,
  })),
);

const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './pages/NotFound').then((m) => ({
    default: m.NotFound,
  })),
);

const SingleProduct = React.lazy(() =>
  import(/* webpackChunkName: "SingleProduct" */ './pages/SingleProduct').then((m) => ({
    default: m.SingleProduct,
  })),
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Идёт загрузка...</div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizzas/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
