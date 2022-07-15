import { configureStore } from '@reduxjs/toolkit';

import product from './slices/productSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    product,
    filter,
    cart,
  },
});
