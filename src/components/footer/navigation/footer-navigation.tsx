import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from './footer-navigation.module.css';

const cx = classNames.bind(style);

export const FooterNavigation: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={cx('navigation')}>
      {children}
    </div>
  );
};
