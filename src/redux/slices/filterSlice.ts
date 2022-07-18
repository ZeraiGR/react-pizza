import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SortProp {
  RATING_DESK = '-rating',
  PRICE_DESK = '-price',
  PRICE_ASK = 'price',
  TITLE_ASK = 'title',
}

export type SortItem = {
  name: string;
  sortProp: SortProp;
};

export interface FilterSliceState {
  categoryId: number;
  sort: SortItem;
  search: string;
  page: number;
  limit: number;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProp: SortProp.RATING_DESK },
  search: '',
  page: 1,
  limit: 4,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.categoryId = +action.payload.categoryId;
        state.page = +action.payload.page;
        state.sort = action.payload.sort;
      } else {
        state.categoryId = 0;
        state.page = 1;
        state.sort = { name: 'популярности', sortProp: SortProp.RATING_DESK };
      }
    },
  },
});

export const { setCategoryId, setSort, setSearch, setPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
