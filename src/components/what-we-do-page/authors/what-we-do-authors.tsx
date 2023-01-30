import cn from 'classnames/bind';
import React from 'react';

import noviceAuthorListItems from 'shared/constants/novice-author-list-items';

import styles from './what-we-do-authors.module.css';

const cx = cn.bind(styles);

export const WhatWeDoAuthors = () => {

  return (
    <section className={cx('authors')}>
      <h2 className={cx('title')}>
        В качестве начинающих авторов в своё время здесь представляли свои пьесы
      </h2>
      <ul className={cx('list')}>
        {noviceAuthorListItems.map((author, index) => (
          <li
            key={index}
            className={cx('item')}
          >
            {author}
          </li>
        ))}
      </ul>
    </section>
  );
};
