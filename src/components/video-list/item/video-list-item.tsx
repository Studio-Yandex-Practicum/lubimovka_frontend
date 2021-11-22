import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './video-list-item.module.css';

const cx = classNames.bind(styles);

interface IVideoListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export const VideoListItem = (props: IVideoListItemProps): JSX.Element => {
  const { children } = props;

  return (
    <li className={cx('item')}>
      {children}
    </li>
  );
};
