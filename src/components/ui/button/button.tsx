import {FC, MouseEvent, ButtonHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'primary' | 'secondary' | 'transparent',
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  size?: 's' | 'l';
  border?: 'none' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'full';
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string
  className?: string,
  disabled?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
  const {view = 'primary', size, leftAddon, rightAddon, label, width, border = 'none', disabled = false ,className, ...restButtonProps} = props;
  return  (
    <button
      className={cn(styles.button, styles[view], styles[border], (leftAddon || rightAddon) && styles.addon, leftAddon && styles.leftAddon, rightAddon && styles.rightAddon, size === 'l' && styles.l, className)}
      type='button'
      disabled = {disabled}
      style = {{width}}
      {...restButtonProps}
    >
      {leftAddon && leftAddon}
      <span className={styles.label}>{label}</span>
      {rightAddon && rightAddon}
    </button>
  );
};

