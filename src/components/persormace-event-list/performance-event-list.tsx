import classNames from 'classnames/bind';

import { PerformanceEventListItem } from './item';

import type { ReactNode } from 'react';

import styles from './performance-event-list.module.css';

interface PerformanceEventListProps {
  children: ReactNode | ReactNode[]
}

const cx = classNames.bind(styles);

const Component = (props: PerformanceEventListProps) => {
  const { children } = props;

  return (
    <ul className={cx('root')}>
      {children}
    </ul>
  );
};

Component.displayName = 'PerformanceEventList';

export const PerformanceEventList = Object.assign(Component, {
  Item: PerformanceEventListItem,
});
