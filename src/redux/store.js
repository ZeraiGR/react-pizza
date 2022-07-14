import { configureStore } from '@reduxjs/toolkit';

import product from './slices/productSlice';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    product,
    filter,
  },
});
