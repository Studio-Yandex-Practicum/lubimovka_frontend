import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-navbar.module.css';

interface PageNavbarProps {
  hidden?: boolean
}

const cx = classNames.bind(styles);

export const PageNavbar: FC<PageNavbarProps> = (props) => {
  const {
    children,
    hidden,
  } = props;

  return (
    <header
      className={cx(
        'root',
        { hidden }
      )}
    >
      {children}
    </header>
  );
};
