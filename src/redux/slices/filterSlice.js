import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProp: '-rating' },
  search: '',
  page: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = +action.payload.categoryId;
      state.page = +action.payload.page;
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSort, setSearch, setPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
