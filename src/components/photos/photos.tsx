import {FC, HTMLAttributes} from 'react';
import classNames from 'classnames/bind';
import { Url } from 'shared/types/common';

import styles from './photos.module.css';

const cx = classNames.bind(styles);

export type TImageItem = {
  image: Url;
  description: string;
}

interface IPhotosProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  images: TImageItem[];
}

export const Photos: FC<IPhotosProps> = (props) => {
  const { className, images } = props;

  return (
    <div className={cx('photos', className)}>
      {images.map((photo, id) => (
        <div key={id}
          className={cx('item')}>
          <img src={photo.image}
            className={cx('photo')}
            alt={photo.description} />
        </div>
      ))}
    </div>
  );
};
