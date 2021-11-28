import { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './page-header.module.css';

interface IPageHeaderProps {
  expanded?: boolean;
  children: ReactNode,
}

const cx = classNames.bind(styles);

export const PageHeader: FC<IPageHeaderProps> = (props) => {
  const {
    expanded,
    children,
  } = props;

  return (
    <header className={cx('header', { expanded })}>
      {children}
    </header>
  );
};
