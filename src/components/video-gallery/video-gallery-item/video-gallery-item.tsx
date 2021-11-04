import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './video-gallery-item.module.css';
import { Url } from 'shared/types';
const cx = classNames.bind(styles);

interface IVideoItemProps extends HTMLAttributes<HTMLElement> {
  url: Url,
  description: string,
  children: ReactNode;
  videoArr: boolean,
}

export const VideoGalleryItem = (props: IVideoItemProps): JSX.Element => {
  const {
    children,
    url,
    description,
    videoArr
  } = props;

  console.log(videoArr);

  const video_items = videoArr ? 'video_items' : '';
  return(
    <li className={cx('video-gallery-item', video_items)}>
      <img src={url} alt={''} className={cx('video')}/>
      {!videoArr && <p className={cx('description')}>{description}</p>}
      {children}
    </li>
  );
};
