import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { VideoListItem } from './item';

import styles from './video-list.module.css';

const cx = classNames.bind(styles);

interface IVideoListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode,
}

export const VideoList = (props: IVideoListProps): JSX.Element => {
  const { children } = props;

  return(
    <ul className={cx('list')}>
      {children}
    </ul>
  );
};

VideoList.Item = VideoListItem;
