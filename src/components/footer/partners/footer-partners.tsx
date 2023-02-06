import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from './footer-partners.module.css';

const cx = classNames.bind(style);

export const FooterPartners: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={cx('partners')}>
      <span className={cx('title')}>
        Генеральные партнеры
      </span>
      {children}
    </div>
  );
};
