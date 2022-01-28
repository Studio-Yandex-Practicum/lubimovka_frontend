import React from 'react';
import cn from 'classnames/bind';

import styles from './what-we-do-authors.module.css';

const cx = cn.bind(styles);

export const WhatWeDoAuthors = (): JSX.Element => {
  const authors = [
    { id: 0, name: 'Михаил Угаров' }, { id: 1, name: 'Алексей Слаповский' },
    { id: 2, name: 'Ольга Михайлова' }, { id: 3, name: 'Елена Гремина' },
    { id: 4, name: 'Иван Вырыпаев' }, { id: 5, name: 'Олег Богаев' },
    { id: 6, name: 'Василий Сигарев' }, { id: 7, name: 'Ксения Драгунская' },
    { id: 8, name: 'Ольга Мухина' }, { id: 9, name: 'Екатерина Нарши' },
    { id: 10, name: 'Елена Исаева' }, { id: 11, name: 'Максим Курочкин' },
    { id: 12, name: 'братья Пресняковы' }, { id: 13, name: 'братья Дурненковы' },
    { id: 14, name: 'Юрий Клавдиев' }, { id: 15, name: 'Евгений Гришковец' }
  ];
  return (
    <section className={cx('authors')}>
      <h2 className={cx('title')}>
        В качестве начинающих авторов в своё время здесь представляли свои пьесы
      </h2>
      <ul className={cx('list')}>
        {authors.map(author => (
          <li className={cx('item')} key={author.id}>
            {author.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
