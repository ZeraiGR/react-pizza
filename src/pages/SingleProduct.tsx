import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchItem, Product } from '../redux/slices/productSlice';
import { useAppDispatch } from '../hooks/hooks';

export const SingleProduct: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = React.useState<Product>();

  const handleError = () => {
    window.alert('Произошла ошибка при получении данных!');
    navigate('/');
  };

  React.useEffect(() => {
    const getItem = async () => {
      try {
        if (id) {
          const { payload } = await dispatch(fetchItem(id));

          if (payload) {
            setProduct(payload as unknown as Product);
          } else {
            handleError();
          }
        }
      } catch (error) {
        handleError();
      }
    };
    getItem();
  }, []);

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} />
      <p>{product.price} ₽</p>
    </div>
  );
};
