import React, { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './partners.module.css';

const cx = classNames.bind(styles);

interface IPartners {
  title: string
}

export const Partners: FC<IPartners> = ({ title, children }) => {
  return (
    <aside className={cx('partners')}>
      <h4 className={cx('title')}>
        {title}
      </h4>
      <ul className={cx('list')}>
        {children}
      </ul>
    </aside>
  );
};
