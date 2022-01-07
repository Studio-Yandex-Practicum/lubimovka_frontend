import { FC, ReactNode /* HTMLAttributes */ } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import cn from 'classnames/bind';

// import { Section } from 'components/section';
// import { Url } from 'shared/types/common';

import styles from './partners.module.css';
// import mockData from './assets/mock-data.json';

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
