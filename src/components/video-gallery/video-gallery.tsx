import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './video-gallery.module.css';
const cx = classNames.bind(styles);

interface IVideoProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const VideoGallery = (props: IVideoProps): JSX.Element => {
  const {
    children,
  } = props;
  return(
    <ul className={cx('video-gallery')}>
      {children}
    </ul>
  );
};
