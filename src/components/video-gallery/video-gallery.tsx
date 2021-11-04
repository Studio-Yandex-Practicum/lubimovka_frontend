import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './video-gallery.module.css';
const cx = classNames.bind(styles);

interface IVideoProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode,
  videoArr: boolean,
}

export const VideoGallery = (props: IVideoProps): JSX.Element => {
  const {
    children,
    videoArr,
  } = props;

  const video_items = videoArr ? 'video_items' : '';

  return(
    <ul className={cx('video-gallery', video_items)}>
      {children}
    </ul>
  );
};
