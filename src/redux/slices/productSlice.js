import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../api/api';

const initialState = {
  items: [],
  total: 0,
  limit: 4,
  status: 'loading', // loading | success | error
};

export const fetchItems = createAsyncThunk('product/fetchItems', async (params) => {
  const { categoryId, sortType, search, page, limit } = params;
  const data = await API.getItems(categoryId, sortType, search, page, limit);
  return data;
});

export const fetchItem = createAsyncThunk('product/fetchItem', async (id) => {
  const data = await API.getItem(id);
  return data;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTotal(state, action) {
      state.total = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload.items;
      state.total = action.payload.count;
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setTotal } = productSlice.actions;

export default productSlice.reducer;
