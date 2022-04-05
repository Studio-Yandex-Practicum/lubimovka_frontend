import { FC, useEffect, useRef } from 'react';
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

  const liRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (liRef.current && current === true) {
      liRef.current.scrollIntoView(false);
    }
  }, [current]);

  return (
    <li className={cx('item', { current })} ref={liRef}>
      <Link href={href}>
        <a className={cx('link')}>
          {children}
        </a>
      </Link>
    </li>
  );
};
