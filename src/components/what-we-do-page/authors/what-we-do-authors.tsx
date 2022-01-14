import React from 'react';
import cn from 'classnames/bind';

import styles from './what-we-do-authors.module.css';

const cx = cn.bind(styles);

export const WhatWeDoAuthors = (): JSX.Element => {
  const authors = [
    'Михаил Угаров', 'Алексей Слаповский', 'Ольга Михайлова', 'Елена Гремина',
    'Иван Вырыпаев', 'Олег Богаев', 'Василий Сигарев', 'Ксения Драгунская',
    'Ольга Мухина', 'Ксения Драгунская', 'Елена Исаева', 'Максим Курочкин',
    'братья Пресняковы', 'братья Дурненковы', 'Юрий Клавдиев', 'Евгений Гришковец'
  ];
  return (
    <section className={cx('authors')}>
      <h2 className={cx('title')}>
        В качестве начинающих авторов в своё время здесь представляли свои пьесы
      </h2>
      <ul className={cx('list')}>
        {authors.map((author, i) => (
          <li className={cx('item')} key={i}>
            {author}
          </li>
        ))}
      </ul>
    </section>
  );
};
