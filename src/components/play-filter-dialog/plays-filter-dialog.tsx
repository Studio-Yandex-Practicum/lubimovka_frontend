import { DialogWindow } from 'components/dialog-window';
import { Modal } from 'components/ui/modal';

interface PlayFilterDialogProps {
  open?: boolean
  onClose: () => void
}

export const PlayFilterDialog: React.FC<PlayFilterDialogProps> = (props) => {
  const {
    children,
    open = false,
    onClose,
  } = props;

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      backdrop={Modal.Backdrop}
    >
      <DialogWindow
        variant="plays-filter"
        onClose={onClose}
      >
        {children}
      </DialogWindow>
    </Modal>
  );
};
