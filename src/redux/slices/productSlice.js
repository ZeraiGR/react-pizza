import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  limit: 4,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = productSlice.actions;

export default productSlice.reducer;
