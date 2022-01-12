/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './first-screen.module.css';

const cx = classNames.bind(styles);

export const FirstScreen: FC = () => {
  return (
    <section className={cx('firstScreen')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>
          Открыт приём пьес на фестиваль {new Date().getFullYear()} года
        </h1>
        <div className={cx('wrapper')}>
          <Button
            label={'ПОДАТЬ ПЬЕСУ'}
            isLink
            href='#'
            size='l'
            border='full'
            icon="arrow-right"
            iconPlace='right'
            width="100%"
            className={cx('button')}
          />
        </div>
      </div>
    </section>
  );
};
