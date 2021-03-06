import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from '../event-list.module.css';

const cx = classNames.bind(style);

export const EventListItem: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <li className={cx('item')}>
      {children}
    </li>
  );
};
