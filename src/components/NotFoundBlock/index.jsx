import React from 'react';
import { Link } from 'react-router-dom';

import style from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div class="container">
      <div class={style.content}>
        <h2>
          <span>😕</span>
          Ничего не найдено
        </h2>
        <p>
          К сожалению, такой страницы не существует! Но вы можете вернуться на главную по ссылке
          ниже!
        </p>
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};
