import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import qs from 'qs';

import {
  Categories,
  Sort,
  PizzaBlock,
  PizzaSkelet,
  Pagination,
  ErrorProducts,
  sortList,
} from '../components';

import { fetchItems } from '../redux/slices/productSlice';
import { FilterSliceState, setFilters } from '../redux/slices/filterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { categoryId, sort, search, page, limit } = useAppSelector((state) => state.filter);
  const { items, status } = useAppSelector((state) => state.product);

  const sortType = sort.sortProp;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (location.search) {
      const params = qs.parse(location.search.slice(1));
      const sort = sortList.find((obj) => obj.sortProp === params.sortType);
      const sortable = sort || sortList[0];

      dispatch(
        setFilters({
          categoryId: params.categoryId,
          sort: sortable,
          page: params.page,
        } as unknown as FilterSliceState),
      );
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
        categoryId: String(categoryId),
        sortType,
        page: String(page),
      };

      console.log('Вшиваем параметры!');
      setSearchParams(params);
    }

    isMounted.current = true;
  }, [categoryId, sortType, search, page, setSearchParams]);

  React.useEffect(() => {
    if (!isSearch.current) {
      console.log(' запрос за пиццами!');
      dispatch(
        fetchItems({
          categoryId,
          sort,
          search,
          page,
          limit,
        }),
      );
    }

    isSearch.current = false;
  }, [categoryId, sort, search, page, limit, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} />
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
