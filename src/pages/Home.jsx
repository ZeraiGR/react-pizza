import React from 'react';

import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { PizzaSkelet } from '../components/PizzaBlock/PizzaSkelet';

// Filter helpers
const ALL = 'Все';
const cats = [ALL, 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

// Sort helpers
const PRICE = 'цене';
const POPULAR = 'популярности';
const ALPHABET = 'алфавиту';
const sortArr = [POPULAR, PRICE, ALPHABET];

const sortByAlph = (x, y) => {
  return x.title.localeCompare(y.title);
};

const sortByPrice = (x, y) => {
  return x.price - y.price;
};

const sortByRate = (x, y) => {
  return y.rating - x.rating;
};
// --------------------------------

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState('Все');
  const [sort, setSort] = React.useState(POPULAR);

  React.useEffect(() => {
    fetch('https://62cadb1a1eaf3786ebb23291.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  const productsSort = (items) => {
    let sortedItems = [];

    switch (sort) {
      case ALPHABET:
        sortedItems = items.sort(sortByAlph);
        break;
      case PRICE:
        sortedItems = items.sort(sortByPrice);
        break;
      case POPULAR:
        sortedItems = items.sort(sortByRate);
        break;

      default:
        sortedItems = items;
        break;
    }

    return sortedItems;
  };

  const productsFiltrer = (items) => {
    let filteredItems = [];

    if (category === ALL) {
      return items;
    }

    const catIndex = cats.findIndex((cat) => cat === category);

    filteredItems = items.filter((item) => item.category === catIndex);

    return filteredItems;
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} setCategory={setCategory} cats={cats} />
        <Sort sortArr={sortArr} sort={sort} setSort={setSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__list-items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <PizzaSkelet key={i} className="pizza-block" />)
          : productsSort(productsFiltrer(items)).map((item) => (
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
    </div>
  );
};
