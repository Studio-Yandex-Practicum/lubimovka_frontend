import classNames from 'classnames/bind';

import style from './play-list.module.css';

const cx = classNames.bind(style);

interface PlayListProps {
  variant?: 'regular' | 'scrollable'
  processing?: boolean
}

export const PlayList = (props: React.PropsWithChildren<PlayListProps>) => {
  const {
    variant = 'regular',
    processing,
    children,
  } = props;

  return (
    <ul className={cx(variant, { processing })}>
      {children}
    </ul>
  );
};

