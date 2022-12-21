import classNames from 'classnames/bind';

import { PlayListItem } from './item';

import style from './play-list.module.css';

const cx = classNames.bind(style);

interface PlayListProps {
  variant?: 'regular' | 'scrollable'
}

const Component = (props: React.PropsWithChildren<PlayListProps>) => {
  const {
    variant = 'regular',
    children,
  } = props;

  return (
    <ul className={cx(variant)}>
      {children}
    </ul>
  );
};

Component.displayName = 'PlayList';

export const PlayList = Object.assign(Component, {
  Item: PlayListItem,
});
