import { FC, PropsWithChildren } from 'react';
import _Link, { LinkProps } from 'next/link';
import classNames from 'classnames/bind';

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
