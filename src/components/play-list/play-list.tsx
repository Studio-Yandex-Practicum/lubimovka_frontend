import classNames from 'classnames/bind';

import { PlayListItem } from './item';

import type { ReactNode } from 'react';

import style from './play-list.module.css';

const cx = classNames.bind(style);

interface PlayListProps {
  children: ReactNode,
}

const Component = (props: PlayListProps) => {
  const {
    children,
  } = props;

  return (
    <ul className={cx('root')}>
      {children}
    </ul>
  );
};

Component.displayName = 'PlayList';

export const PlayList = Object.assign(Component, {
  Item: PlayListItem,
});
