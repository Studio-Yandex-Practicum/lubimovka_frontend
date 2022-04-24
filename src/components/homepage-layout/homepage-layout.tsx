import classNames from 'classnames/bind';

import { HomepageLayoutFeed } from './feed';
import { HomepageLayoutContent } from './content';
import { HomepageLayoutEvents } from './events';

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
  Feed: HomepageLayoutFeed,
  Content: HomepageLayoutContent,
  Events: HomepageLayoutEvents,
});
