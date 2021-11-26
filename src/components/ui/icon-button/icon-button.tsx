import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './icon-button.module.css';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type: 'button' | 'submit' | 'reset';
  view: 'ghost' | 'light';
  ariaLabel: string;
  icon: React.ReactNode;
}

const cx = classNames.bind(styles);

export const IconButton = (props: IIconButtonProps): JSX.Element => {
  const {
    className = '',
    type,
    view = 'ghost',
    ariaLabel,
    icon,
    ...restProps
  } = props;

  return(
    <button
      className={cx(className, 'button', [view])}
      type={type}
      aria-label={ariaLabel}
      {...restProps}
    >
      {icon}
    </button>
  );
};
