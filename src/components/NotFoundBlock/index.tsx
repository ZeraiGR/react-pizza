import React from 'react';
import { Link } from 'react-router-dom';

import style from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className="container">
      <div className={style.content}>
        <h2>
          <span>😕</span>
          Ничего не найдено
        </h2>
        <p>
          К сожалению, такой страницы не существует! Но вы можете вернуться на главную по ссылке
          ниже!
        </p>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};
