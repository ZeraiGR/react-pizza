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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
