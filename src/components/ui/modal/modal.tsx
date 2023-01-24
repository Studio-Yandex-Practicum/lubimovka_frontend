import classNames from 'classnames/bind';
import FocusLock from 'react-focus-lock';

import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';
import { Portal } from 'components/ui/portal';

import type { ModalBackdropProps } from './backdrop';

import styles from './modal.module.css';

const cx = classNames.bind(styles);

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  backdrop?: React.FC<ModalBackdropProps>,
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
    backdrop: Backdrop,
    isOpen,
    onClose,
  } = props;

  useDisableBodyScroll(isOpen);

  if (!isOpen) return null;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Portal>
      <FocusLock returnFocus>
        <div
          role="dialog"
          className={cx('root')}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          {Backdrop && <Backdrop onClick={onClose}/>}
          <div className={cx('inner')}>
            <div className={cx('content')}>
              {children}
            </div>
          </div>
        </div>
      </FocusLock>
    </Portal>
  );
};
