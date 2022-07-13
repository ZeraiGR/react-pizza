import React from 'react';

import { API } from '../api/api';
import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { PizzaSkelet } from '../components/PizzaBlock/PizzaSkelet';
import { Pagination } from '../components/common/Pagination';

// Sort helpers
const sortList = [
  { name: 'цене (возрастающая)', sortProp: 'price' },
  { name: 'цене (убывающая)', sortProp: '-price' },
  { name: 'популярности', sortProp: 'rating' },
  { name: 'алфавиту', sortProp: 'title' },
];

export const Home = ({ search }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [limit, setLimit] = React.useState(4);
  const [page, setPage] = React.useState(1);

  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProp: 'rating' });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    async function loadItems() {
      setIsLoading(true);
      let data = await API.getItems(categoryId, sortType.sortProp, search, page, limit);
      setItems(data.items);
      setTotal(data.count);
      setIsLoading(false);
    }
    loadItems();
  }, [categoryId, sortType, search, page]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort sortList={sortList} value={sortType} onChangeSort={(sort) => setSortType(sort)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__list-items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <PizzaSkelet key={i} className="pizza-block" />)
          : items.map((item) => (
              <PizzaBlock
                key={item.id}
                img={item.imageUrl}
                title={item.title}
                price={item.price}
                types={item.types}
                sizes={item.sizes}
              />
            ))}
      </div>
      <Pagination limit={limit} total={total} setPage={setPage} />
    </div>
  );
};
