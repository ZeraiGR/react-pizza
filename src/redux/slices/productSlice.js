import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  limit: 4,
  page: 1,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setTotal, setPage } = productSlice.actions;

export default productSlice.reducer;
