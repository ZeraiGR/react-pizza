import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchItem } from '../redux/slices/productSlice';

export const SingleProduct: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = React.useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();

  const handleError = () => {
    window.alert('Произошла ошибка при получении данных!');
    navigate('/');
  };

  React.useEffect(() => {
    const getItem = async () => {
      try {
        // @ts-ignore
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

  if (!product) {
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
