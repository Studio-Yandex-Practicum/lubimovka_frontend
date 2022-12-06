import { HTMLAttributes, FC, useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { Lightbox } from 'components/lightbox';
import { Url } from 'shared/types';

import styles from './photo-gallery.module.css';

const cx = classNames.bind(styles);

type PhotoGalleryItem = {
  url: Url,
  description?: string,
}

interface IPhotoGalleryProps extends HTMLAttributes<HTMLDivElement> {
  photos: PhotoGalleryItem[],
}

export const PhotoGallery: FC<IPhotoGalleryProps> = (props) => {
  const {
    className,
    photos,
  } = props;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const toggleLightbox = () => setIsLightboxOpen(!isLightboxOpen);

  const handleItemClick = (index: number) => () => {
    setCurrentPhotoIndex(index);
    toggleLightbox();
  };

  return (
    <div>
      <ul className={cx('list', className)}>
        {photos.map(({ url, description = '' }, index) => (
          <li
            key={url}
            className={cx('item')}
          >
            <Image
              src={url}
              alt={description}
              layout="fill"
              objectFit="cover"
            />
            <button
              type="button"
              aria-label="Увеличить изображение"
              className={cx('button')}
              onClick={handleItemClick(index)}
            />
          </li>
        ))}
      </ul>
      <Lightbox
        isOpen={isLightboxOpen}
        initialSlideIndex={currentPhotoIndex}
        onClose={toggleLightbox}
      >
        {photos.map(({ url, description = '' }) => (
          <Image
            key={url}
            src={url}
            alt={description}
            layout="fill"
            objectFit="cover"
          />
        ))}
      </Lightbox>
    </div>
  );
};
