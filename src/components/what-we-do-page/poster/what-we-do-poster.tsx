import React from 'react';
import cn from 'classnames/bind';

import styles from './what-we-do-poster.module.css';

const cx = cn.bind(styles);

export const WhatWeDoPoster = (): JSX.Element => (
  <section className={cx('poster')}>
    <h3 className={cx('title')}>
      <span className={cx('ampersand')}>
        &
      </span>
      Помимо открытого конкурса, на который свою пьесу может прислать любой желающий
    </h3>
    <p className={cx('desc')}>
      Организаторы фестиваля каждый год собирают пул новых произведений от состоявшихся драматургов и передают его куратору внеконкурсной программы.
      Руководствуясь собственным вкусом, профессиональным опытом и представлениями о тенденциях в современном театре и драматургии, куратор выбирает несколько пьес из этого пула,
      которые также представляются в рамках фестиваля.
    </p>
  </section>
);
