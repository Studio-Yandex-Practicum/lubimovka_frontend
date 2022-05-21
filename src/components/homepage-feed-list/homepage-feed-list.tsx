import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { HomepageFeedListItem } from './item';

import styles from './homepage-feed-list.module.css';

interface HomepageFeedListProps {
  children: ReactNode | ReactNode[]
  className?: string
}

const cx = classNames.bind(styles);

const Component = (props: HomepageFeedListProps) => {
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

export const HomepageFeedList = Object.assign(Component, {
  Item: HomepageFeedListItem,
});
