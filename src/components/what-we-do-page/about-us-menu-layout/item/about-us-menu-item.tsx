import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames/bind';

import styles from './about-us-menu-item.module.css';

const cx = classNames.bind(styles);

interface IAboutUsMenuItemProps extends Pick<LinkProps, 'href'> { current?: boolean, }

export const AboutUsMenuItem: FC<IAboutUsMenuItemProps> = (props): JSX.Element => {
  const {
    href,
    current = false,
    children
  } = props;

  return (
    <li className={cx('item', { current })}>
      <Link href={href}>
        <a className={cx('link')}>
          {children}
        </a>
      </Link>
    </li>
  );
};
