import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from './play-list.module.css';

const cx = classNames.bind(style);

export const PlayListItem: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <li className={cx('item')}>
      {children}
    </li>
  );
};
