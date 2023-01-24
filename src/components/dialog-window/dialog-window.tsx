import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './dialog-window.module.css';

const cx = classNames.bind(styles);

interface DialogWindowProps {
  variant: 'lightbox' | 'plays-filter' | 'feedback'
  onClose: () => void
}

export const DialogWindow: React.FC<DialogWindowProps> = (props) => {
  const {
    variant,
    children,
    onClose
  } = props;

  return (
    <div className={cx(variant)}>
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
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  );
};

