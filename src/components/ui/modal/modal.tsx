import { ReactNode, FC, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import FocusLock from 'react-focus-lock';

import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';
import { ModalBackdrop, IModalBackdropProps } from './backdrop';
import { Portal } from 'components/ui/portal';

import styles from './modal.module.css';

const cx = classNames.bind(styles);

interface IModalProps {
  children: ReactNode,
  isOpen: boolean,
  onClose: () => void,
  Backdrop?: FC<IModalBackdropProps>,
}

export const Modal = (props: IModalProps): JSX.Element | null=> {
  const {
    children,
    Backdrop,
    isOpen,
    onClose,
  } = props;

  useDisableBodyScroll(isOpen);

  if (!isOpen) return null;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Portal>
      <FocusLock returnFocus>
        <div
          role='dialog'
          className={cx('container')}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          {Backdrop && <Backdrop onClick={onClose}/>}
          {children}
        </div>
      </FocusLock>
    </Portal>
  );
};

Modal.Backdrop = ModalBackdrop;
