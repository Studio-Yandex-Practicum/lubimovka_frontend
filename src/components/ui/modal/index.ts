import { Modal as Component } from './modal';
import { ModalBackdrop } from './backdrop';

export const Modal = Object.assign(Component, {
  Backdrop: ModalBackdrop,
});
