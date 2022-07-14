import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { PizzaSkelet } from '../components/PizzaBlock/PizzaSkelet';
import { Pagination } from '../components/common/Pagination';

import { setTotal } from '../redux/slices/productSlice';
import { API } from '../api/api';

export const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const dispatch = useDispatch();

  const { categoryId, sort, search } = useSelector((state) => state.filter);
  const { page, limit } = useSelector((state) => state.product);

  const sortType = sort.sortProp;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    async function loadItems() {
      setIsLoading(true);
      const data = await API.getItems(categoryId, sortType, search, page, limit);
      setItems(data.items);
      dispatch(setTotal(data.count));
      setIsLoading(false);
    }
    loadItems();
  }, [categoryId, sortType, search, page]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
      <Pagination />
    </div>
  );
};
