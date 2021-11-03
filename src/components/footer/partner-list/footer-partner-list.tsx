import { FC } from 'react';
import classNames from 'classnames/bind';

import style from './footer-partner-list.module.css';

const cx = classNames.bind(style);

export const FooterPartnerList: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <ul className={cx('list')}>
      {children}
    </ul>
  );
};
