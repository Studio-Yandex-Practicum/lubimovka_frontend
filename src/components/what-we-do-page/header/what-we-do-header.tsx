
import cn from 'classnames/bind';
import Image from 'next/image';

import styles from './what-we-do-header.module.css';

const cx = cn.bind(styles);

export const WhatWeDoHeader = (): JSX.Element => (
  <section className={cx('header')}>
    <div className={cx('content')}>
      <h1 className={cx('title')}>
        Независимый фестиваль драматургии Любимовка  —
      </h1>
      <div className={cx('containerText')}>
        <p className={cx('desc')}>
          это некоммерческий международный проект русскоязычных драматургов.
        </p>
        <p className={cx('desc')}>
          Любимовка продолжает традицию фестиваля, который в первые годы своего существования проходил в подмосковной усадьбе Константина Станиславского Любимовка.
        </p>
      </div>
    </div>
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <Image
          src="/images/what-we-do/header.jpg"
          alt="Что мы делаем?"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={cx('containerSpace')}>
        <div className={cx('containerSpaceUp')}/>
        <div className={cx('containerSpaceDown')}/>
      </div>
    </div>
  </section>
);
