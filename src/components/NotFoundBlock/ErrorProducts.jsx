import React from 'react';

import style from './NotFoundBlock.module.scss';

export const ErrorProducts = () => {
  return (
    <div class={style.content}>
      <h2>
        <span>😕</span>
        Не удалось подгрузить пиццы!
      </h2>
      <p>
        К сожалению, пиццы загрузить не удалось! Но вы можете попробовать ещё раз через некоторое
        время! Не переживайте! Всё будет хорошо!
      </p>
    </div>
  );
};
