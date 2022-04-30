import classNames from 'classnames/bind';

import { EventListItem } from './item';

import type { ReactNode } from 'react';

import style from './event-list.module.css';

const cx = classNames.bind(style);

interface EventListProps {
  children: ReactNode,
}

const Component = (props: EventListProps) => {
  const {
    children,
  } = props;

  return (
    <ul className={cx('root')}>
      {children}
    </ul>
  );
};

Component.displayName = 'EventList';

export const EventList = Object.assign(Component, {
  Item: EventListItem,
});
