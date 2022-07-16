import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62cadb1a1eaf3786ebb23291.mockapi.io/',
});

export const API = {
  getItems(categoryId = 0, sort, search, page, limit) {
    const sortBy = sort.replace('-', '');
    const order = sort.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const searching = search ? `&search=${search}` : '';
    const pagination = `&page=${page}&limit=${limit}`;

    return instance
      .get(`items?sortBy=${sortBy}&order=${order}${category}${searching}${pagination}`)
      .then((res) => res.data);
  },
  getItem(id) {
    return instance.get(`items/${id}`).then((res) => res.data);
  },
};
