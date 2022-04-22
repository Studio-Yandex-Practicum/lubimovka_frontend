import classNames from 'classnames/bind';

import { HomepageLayoutAside } from './aside';
import { HomepageLayoutMain } from './main';
import { HomepageLayoutPrepend } from './prepend';

import type { FC } from 'react';

import styles from './homepage-layout.module.css';

const cx = classNames.bind(styles);

const Component: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'HomepageLayout';

export const HomepageLayout = Object.assign(Component, {
  Aside: HomepageLayoutAside,
  Main: HomepageLayoutMain,
  Prepend: HomepageLayoutPrepend,
});
