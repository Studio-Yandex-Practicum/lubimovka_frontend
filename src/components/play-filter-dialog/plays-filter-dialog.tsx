import classNames from 'classnames/bind';

import { Modal } from 'components/ui/modal';
import { Icon } from 'components/ui/icon';

import styles from './plays-filter-dialog.module.css';

interface PlayFilterDialogProps {
  open?: boolean
  onClose: () => void,
}

const cx = classNames.bind(styles);

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
      <div className={cx('window')}>
        <button
          className={cx('close')}
          onClick={onClose}
          type="button"
        >
          <Icon
            height="100%"
            width="100%"
            glyph="cross"
          />
          Закрыть
        </button>
        {children}
      </div>
    </Modal>
  );
};
