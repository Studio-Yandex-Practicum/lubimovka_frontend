import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './navbar-button.module.css';
const cx = cn.bind(styles);

export interface INavbarButtonProps {
  label: string;
  href: string;
}

export const NavbarButton: FC<INavbarButtonProps> = (props) => {
  const { label, href } = props;

  return (
    <Button
      className={cx('navbarButton')}
      label={label}
      align='center'
      icon="plus"
      iconPlace="left"
      href={href}
      isLink
    />
  );
};
