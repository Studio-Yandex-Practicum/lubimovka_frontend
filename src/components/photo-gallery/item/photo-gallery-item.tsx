import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';

import { Url } from 'shared/types';

import styles from './photo-gallery-item.module.css';

interface IPhotoGalleryItemProps {
  image: Url,
  description?: string,
}

const cx = classNames.bind(styles);

export const PhotoGalleryItem: FC<IPhotoGalleryItemProps> = (props) => {
  const {
    image,
    description = ''
  } = props;

  return (
    <li className={cx('item')}>
      <Image
        src={image}
        alt={description}
        layout="fill"
        objectFit="cover"
      />
    </li>
  );
};
