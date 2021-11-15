import classNames from 'classnames/bind';

import { ImageSlider, TImageItem } from 'components/ui/image-slider';
import { Modal } from 'components/ui/modal';

import styles from './lightbox.module.css';
const cx = classNames.bind(styles);

interface ILightboxProps {
  images: TImageItem[];
  isOpen: boolean;
  initialSlide: number;
  onClose: () => void;
}
export const Lightbox = (props: ILightboxProps): JSX.Element => {
  const {
    images,
    isOpen,
    initialSlide,
    onClose
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      Backdrop={Modal.Backdrop}
    >
      <div className={cx('container')}>
        <ImageSlider
          images={images}
          type='popup'
          showDots={false}
          initialSlide={initialSlide}
          onClose={onClose}
        />
      </div>
    </Modal>
  );
};
