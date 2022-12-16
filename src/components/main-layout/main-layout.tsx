import classNames from 'classnames/bind';

import { MainLayoutFeed } from './feed';
import { MainLayoutContent } from './content';
import { MainLayoutEvents } from './events';

import type { FC } from 'react';

import styles from './main-layout.module.css';

const cx = classNames.bind(styles);

const Component: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'MainLayout';

export const MainLayout = Object.assign(Component, {
  Feed: MainLayoutFeed,
  Content: MainLayoutContent,
  Events: MainLayoutEvents,
});
