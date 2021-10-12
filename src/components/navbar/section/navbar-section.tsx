import { FC } from 'react';
import classNames from 'classnames/bind';

import style from './navbar-section.module.css';

interface INavbarSectionProps {
  primary?: boolean;
}

const cx = classNames.bind(style);

export const NavbarSection: FC<INavbarSectionProps> = (props) => {
  const {
    primary,
    children,
  } = props;

  const Tag = primary ? 'nav' : 'div';

  return (
    <Tag className={cx('section', { primary })}>
      {children}
    </Tag>
  );
};
