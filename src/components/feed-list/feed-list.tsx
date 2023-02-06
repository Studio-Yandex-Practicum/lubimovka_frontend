import classNames from 'classnames/bind';

import { FeedListItem } from './item';

import type { ReactNode } from 'react';

import styles from './feed-list.module.css';

interface FeedListProps {
  children: ReactNode | ReactNode[]
  className?: string
}

const cx = classNames.bind(styles);

const Component = (props: FeedListProps) => {
  const {
    children,
    className,
  } = props;

  return (
    <ul className={cx('root', className)}>
      {children}
    </ul>
  );
};

export const FeedList = Object.assign(Component, {
  Item: FeedListItem,
});
