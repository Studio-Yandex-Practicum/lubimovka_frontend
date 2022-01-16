import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-header.module.css';

interface IPageHeaderProps {
  expanded?: boolean,
  theme?: 'brand',
}

const cx = classNames.bind(styles);

export const PageHeader: FC<IPageHeaderProps> = (props) => {
  const {
    expanded,
    theme,
    children,
  } = props;

  return (
    <header className={cx('header', { expanded }, theme)}>
      {children}
    </header>
  );
};
