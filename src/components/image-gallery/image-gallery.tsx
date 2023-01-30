import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';

import { DialogWindow } from 'components/dialog-window';
import { ImageCarousel } from 'components/image-carousel';
import { Modal } from 'components/ui/modal';

import styles from './image-gallery.module.css';

const cx = classNames.bind(styles);

type GalleryImage = {
  url: Url,
  description?: string,
}

interface ImageGalleryProps {
  title?: string
  items: GalleryImage[]
  className?: string
}

export const ImageGallery: React.VFC<ImageGalleryProps> = (props) => {
  const { className, title, items } = props;
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const toggleFullscreenMode = () => (setFullscreenMode(!fullscreenMode));

  const handleItemClick = (index: number) => () => {
    setCurrentSlideIndex(index);
    toggleFullscreenMode();
  };

  return (
    <div>
      {title && (
        <h2 className={cx('title')}>
          {title}
        </h2>
      )}
      <ul className={cx('list', className)}>
        {items.map(({ url, description = '' }, index) => (
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
      <Modal
        isOpen={fullscreenMode}
        onClose={toggleFullscreenMode}
        backdrop={Modal.Backdrop}
      >
        <DialogWindow
          variant="lightbox"
          onClose={toggleFullscreenMode}
        >
          <ImageCarousel
            initialSlideIndex={currentSlideIndex}
          >
            {items.map(({ url, description = '' }) => (
              <ImageCarousel.Slide key={url}>
                <Image
                  src={url}
                  alt={description}
                  layout="fill"
                  objectFit="cover"
                />
              </ImageCarousel.Slide>
            ))}
          </ImageCarousel>
        </DialogWindow>
      </Modal>
    </div>
  );
};
