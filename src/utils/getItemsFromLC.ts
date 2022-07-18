export const getItemsFromLC = () => {
  const data = window.localStorage.getItem('cart');

  if (data) {
    const items = JSON.parse(data);
    return items;
  }

  return [];
};
