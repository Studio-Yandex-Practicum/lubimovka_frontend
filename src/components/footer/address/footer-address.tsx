import { FC } from 'react';
import classNames from 'classnames/bind';

import style from './footer-address.module.css';

const cx = classNames.bind(style);

export const FooterAddress: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <address className={cx('address')}>
      {children}
    </address>
  );
};
