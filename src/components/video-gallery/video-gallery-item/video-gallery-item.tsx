import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './video-gallery-item.module.css';
const cx = classNames.bind(styles);

interface IVideoItemProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const VideoGalleryItem = (props: IVideoItemProps): JSX.Element => {
  const {
    children,
  } = props;
  return(
    <li className={cx('video-gallery-item')}>
      {children}
    </li>
  );
};
