import classNames from 'classnames/bind';

import { EventListItem } from './item';

import type { FC } from 'react';

import style from './event-list.module.css';

const cx = classNames.bind(style);

const Component: FC = (props) => {
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
