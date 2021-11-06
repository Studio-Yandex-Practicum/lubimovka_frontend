import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import { PhotoGalleryItem } from './item';

import styles from './photo-gallery.module.css';

const cx = classNames.bind(styles);

interface IPhotoGalleryProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const PhotoGallery = (props: IPhotoGalleryProps): JSX.Element => {
  const { className, children } = props;

  return (
    <ul className={cx('gallery', className)}>
      {children}
    </ul>
  );
};

PhotoGallery.Item = PhotoGalleryItem;
