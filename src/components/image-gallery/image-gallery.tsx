import { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { Modal } from 'components/ui/modal';
import { DialogWindow } from 'components/dialog-window';
import { ImageCarousel } from 'components/image-carousel';

import styles from './image-gallery.module.css';

const cx = classNames.bind(styles);

type GalleryImage = {
  url: Url,
  description?: string,
}

interface ImageGalleryProps {
  items: GalleryImage[]
  className?: string
}

export const ImageGallery: React.VFC<ImageGalleryProps> = (props) => {
  const { className, items } = props;
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const toggleFullscreenMode = () => (setFullscreenMode(!fullscreenMode));

  const handleItemClick = (index: number) => () => {
    setCurrentSlideIndex(index);
    toggleFullscreenMode();
  };

  return (
    <div>
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
