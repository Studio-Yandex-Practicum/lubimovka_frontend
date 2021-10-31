import { FC } from 'react';
import classNames from 'classnames/bind';

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
