import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: { name: 'популярности', sortProp: 'rating' },
  search: '',
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
  },
});

export const { setCategoryId, setSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
