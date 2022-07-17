import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import qs from 'qs';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { PizzaSkelet } from '../components/PizzaBlock/PizzaSkelet';
import { Pagination } from '../components/common/Pagination';
import { sortList } from '../components/Sort/Sort';
import { ErrorProducts } from '../components/NotFoundBlock/ErrorProducts';

import { fetchItems } from '../redux/slices/productSlice';
import { setFilters } from '../redux/slices/filterSlice';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { categoryId, sort, search, page } = useSelector((state: any) => state.filter);
  const { limit, items, status } = useSelector((state: any) => state.product);

  const sortType = sort.sortProp;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (location.search) {
      const params = qs.parse(location.search.slice(1));
      const sort = sortList.find((obj) => obj.sortProp === params.sortType);

      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  // todo придумать как реализовать очистку фильтров
  // React.useEffect(() => {
  //   if (!location.search) {
  //     console.log('location search must be clear!');
  //     dispatch(
  //       setFilters({ categoryId: 0, page: 1, sort: { name: 'популярности', sortProp: '-rating' } }),
  //     );
  //   }
  // }, [location]);

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        categoryId,
        sortType,
        page,
      };

      console.log('Вшиваем параметры!');
      setSearchParams(params);
    }

    isMounted.current = true;
  }, [categoryId, sortType, search, page]);

  React.useEffect(() => {
    if (!isSearch.current) {
      console.log(' запрос за пиццами!');
      dispatch(
        // @ts-ignore
        fetchItems({
          categoryId,
          sortType,
          search,
          page,
          limit,
        }),
      );
    }

    isSearch.current = false;
  }, [categoryId, sortType, search, page]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      {status === 'error' ? (
        <ErrorProducts />
      ) : (
        <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__list-items">
            {status === 'loading' &&
              [...new Array(8)].map((_, i) => <PizzaSkelet key={i} className="pizza-block" />)}
            {status === 'success' &&
              items.map((item: any) => (
                <PizzaBlock
                  key={item.id}
                  id={item.id}
                  img={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  types={item.types}
                  sizes={item.sizes}
                />
              ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};
