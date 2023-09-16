import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';

import { DialogWindow } from 'components/dialog-window';
import { Modal } from 'components/ui/modal';

import { ImageSlider } from '../ui/image-slider';

import styles from './image-gallery.module.css';

const cx = classNames.bind(styles);

type GalleryImage = {
  url: Url
  description?: string
}

interface ImageGalleryProps {
  items: GalleryImage[]
  title: string
  className?: string
}

export const ImageGallery: React.VFC<ImageGalleryProps> = (props) => {
  const { className, items, title } = props;
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
          <ImageSlider
            initialSlide={currentSlideIndex}
          >
            {items.map(({ url, description= '' }) => (
              <Image
                key={url}
                src={url}
                alt={description}
                layout="fill"
                objectFit="cover"
              />
            ))}
          </ImageSlider>
        </DialogWindow>
      </Modal>
    </div>
  );
};
