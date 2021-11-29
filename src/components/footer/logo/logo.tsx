import { FC } from 'react';
import classNames from 'classnames/bind';

import style from './logo.module.css';
import Logo from 'shared/images/logo-full.svg';

const cx = classNames.bind(style);

export const FooterLogo: FC = () => {

  return (
    <Logo className={cx('logo')}/>
  );
};
