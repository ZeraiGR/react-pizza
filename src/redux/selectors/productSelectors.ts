import { RootState } from '../store';

export const selectItem = (id: string) => (state: RootState) => {
  return state.product.items.find((obj) => obj.id === id);
};
