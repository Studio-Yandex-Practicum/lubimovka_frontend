import classNames from 'classnames/bind';

import styles from './burger-button.module.css';

interface IBurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const cx = classNames.bind(styles);

export const BurgerButton = (props: IBurgerButtonProps): JSX.Element => {
  const { isOpen, onClick } = props;

  return (
    <div
      className={cx('button', { open: isOpen })}
      role="button"
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      onClick={onClick}
    >
      <span className={cx('line')}></span>
      <span className={cx('line')}></span>
      <span className={cx('line')}></span>
    </div>
  );
};
