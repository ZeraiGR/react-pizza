import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchItem } from '../redux/slices/productSlice';

export const SIngleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = React.useState({});

  const handleError = () => {
    window.alert('Произошла ошибка при получении данных!');
    navigate('/');
  };

  React.useEffect(() => {
    const getItem = async () => {
      try {
        const { payload } = await dispatch(fetchItem(id));
        if (payload) {
          setProduct(payload);
        } else {
          handleError();
        }
      } catch (error) {
        handleError();
      }
    };
    getItem();
  }, []);

  if (Object.keys(product).length == 0) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.price} ₽</p>
    </div>
  );
};
