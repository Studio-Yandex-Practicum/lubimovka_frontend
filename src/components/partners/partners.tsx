import { FC, ReactNode } from 'react';
import cn from 'classnames/bind';

import styles from './partners.module.css';

const cx = cn.bind(styles);

interface IPartners {
  title: string
  children: ReactNode
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
