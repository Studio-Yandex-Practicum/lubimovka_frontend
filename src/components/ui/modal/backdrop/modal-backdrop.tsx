import classNames from 'classnames/bind';

import styles from './modal-backdrop.module.css';

const cx = classNames.bind(styles);

export interface ModalBackdropProps {
  className?: string;
  onClick?: () => void;
}

export const ModalBackdrop: React.FC<ModalBackdropProps> = (props) => {
  const { className, onClick } = props;

  return (
    <div
      className={cx('backdrop', [className])}
      role="button"
      tabIndex={-1}
      onClick={onClick}
    />
  );
};

