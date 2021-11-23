import classNames from 'classnames/bind';

import { Modal } from 'components/ui/modal';
import { LightboxImageSlider, TImageItem } from 'components/lightbox-image-slider';

import styles from './lightbox.module.css';
const cx = classNames.bind(styles);

interface ILightboxProps {
  images: TImageItem[];
  isOpen: boolean;
  initialSlideIndex: number;
  onClose: () => void;
}
export const Lightbox = (props: ILightboxProps): JSX.Element => {
  const {
    images,
    isOpen,
    initialSlideIndex,
    onClose
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      Backdrop={Modal.Backdrop}
    >
      <div className={cx('container')}>
        <LightboxImageSlider
          images={images}
          initialSlideIndex={initialSlideIndex}
          onClose={onClose}
        />
      </div>
    </Modal>
  );
};
