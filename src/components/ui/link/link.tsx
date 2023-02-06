import classNames from 'classnames/bind';
import _Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import styles from './link.module.css';

const cx = classNames.bind(styles);

export const Link: FC<PropsWithChildren<LinkProps>> = (props) => {
  const {
    children,
    ...restLinkProps
  } = props;

  return (
    <_Link {...restLinkProps}>
      <a className={cx('root')}>
        {children}
      </a>
    </_Link>
  );
};
