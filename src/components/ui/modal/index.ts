import { ModalBackdrop } from './backdrop';
import { Modal as Component } from './modal';

export const Modal = Object.assign(Component, {
  Backdrop: ModalBackdrop,
});
