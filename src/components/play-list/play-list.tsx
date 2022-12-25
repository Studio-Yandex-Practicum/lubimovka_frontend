import classNames from 'classnames/bind';

import style from './play-list.module.css';

const cx = classNames.bind(style);

interface PlayListProps {
  variant?: 'regular' | 'scrollable'
}

export const PlayList = (props: React.PropsWithChildren<PlayListProps>) => {
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
