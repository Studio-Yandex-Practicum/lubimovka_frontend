import {FC, MouseEvent, ButtonHTMLAttributes, ReactNode} from 'react';
import {Icon} from '../icon';
import cn from 'classnames';
import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'primary' | 'secondary' | 'transparent',
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  size?: 's' | 'm' | 'l';
  iconPlace?: 'left' | 'right';
  border?: 'none' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'full';
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButtonProps> = (props) => {
  const {view = 'primary', size, leftAddon, rightAddon, iconPlace, label, border = 'none', ...restButtonProps} = props;

  return  (
    <button
      className={cn(styles.button, styles[view], styles[border], leftAddon && styles.leftAddon, rightAddon && styles.rightAddon, size && styles['sizeFixed'], size && styles[size])}
      type='button'
      {...restButtonProps}
    >
      {leftAddon && leftAddon}
      <span className={styles.label}>{label}</span>
      {rightAddon && rightAddon}
    </button>
  );
};

