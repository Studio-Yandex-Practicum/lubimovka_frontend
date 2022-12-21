import classNames from 'classnames/bind';

import { Modal } from 'components/ui/modal';
import { LightboxImageSlider } from 'components/lightbox-image-slider';

import styles from './lightbox.module.css';

const cx = classNames.bind(styles);

interface ILightboxProps {
  isOpen: boolean;
  initialSlideIndex: number;
  children: React.ReactNode;
  onClose: () => void;
}
export const Lightbox = (props: ILightboxProps): JSX.Element => {
  const {
    isOpen,
    initialSlideIndex,
    children,
    onClose
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop={Modal.Backdrop}
    >
      <LightboxImageSlider
        className={cx('slider')}
        initialSlideIndex={initialSlideIndex}
        onClose={onClose}
      >
        {children}
      </LightboxImageSlider>
    </Modal>
  );
};
