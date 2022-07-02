
import Image from 'next/image';
import cn from 'classnames/bind';

import styles from './what-we-do-header.module.css';

const cx = cn.bind(styles);

export const WhatWeDoHeader = (): JSX.Element => (
  <section className={cx('header')}>
    <div className={cx('content')}>
      <h1 className={cx('title')}>
        Фестиваль молодой драматургии Любимовка —
      </h1>
      <div className={cx('containerText')}>
        <p className={cx('desc')}>
          это независимый некоммерческий коллективный проект российских драматургов
        </p>
        <p className={cx('desc')}>
          В первые годы своего существования фестиваль проходил в подмосковной усадьбе Константина Сергеевича Станиславского, которое и дало название фестивалю.
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
