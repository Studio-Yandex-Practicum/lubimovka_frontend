import classNames from 'classnames/bind';

import { EventListItem } from './item';

import type { FC } from 'react';

import style from './event-list.module.css';

const cx = classNames.bind(style);

interface EventListProps {
  variant?: 'default' | 'compact'
}

const Component: FC<EventListProps> = (props) => {
  const {
    variant = 'default',
    children,
  } = props;

  return (
    <ul className={cx(variant)}>
      {children}
    </ul>
  );
};

Component.displayName = 'EventList';

export const EventList = Object.assign(Component, {
  Item: EventListItem,
});
