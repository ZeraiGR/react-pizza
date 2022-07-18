import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../api/api';
import { FilterSliceState } from './filterSlice';

enum FetchStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Product = {
  id: string;
  categoryId: number;
  img: string;
  title: string;
  types: number[];
  sizes: number[];
  rating: number;
	price: number;
};

interface ProductSliceState {
  items: Product[];
  total: number;
  status: FetchStatus;
}

export interface FetchItemsResponse {
  items: Product[];
  count: number;
}

const initialState: ProductSliceState = {
  items: [],
  total: 0,
  status: FetchStatus.LOADING,
};

export const fetchItems = createAsyncThunk<FetchItemsResponse, FilterSliceState>(
  'product/fetchItems',
  async (params) => {
    const { categoryId, sort, search, page, limit } = params;
    const data = await API.getItems(categoryId, sort.sortProp, search, page, limit);
    return data;
  },
);

export const fetchItem = createAsyncThunk<Product, string>('product/fetchItem', async (id) => {
  const data = await API.getItem(id);
  return data;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = FetchStatus.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = FetchStatus.SUCCESS;
      state.items = action.payload.items;
      state.total = action.payload.count;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = FetchStatus.ERROR;
      state.items = [];
    });
  },
});

export const { setTotal } = productSlice.actions;

export default productSlice.reducer;
