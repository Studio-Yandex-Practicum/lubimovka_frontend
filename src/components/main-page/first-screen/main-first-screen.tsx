import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { MainFirstScreen as IMainFirstScreen } from 'api-typings';
import { Button } from 'components/ui/button';

import styles from './main-first-screen.module.css';

const cx = classNames.bind(styles);

export const MainFirstScreen: FC<IMainFirstScreen> = ({ title, url_title, url }) => (
  <section className={cx('firstScreen')}>
    <div className={cx('container')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <div className={cx('wrapper')}>
        <Button
          label={url_title}
          isLink
          href={url}
          size="l"
          border="full"
          icon="arrow-right"
          iconPlace="right"
          width="100%"
          className={cx('button')}
          target="_blank"
        />
      </div>
    </div>
  </section>
);
