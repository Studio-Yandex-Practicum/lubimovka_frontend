import React, {FC, MouseEvent, ButtonHTMLAttributes} from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'primary' | 'secondary' | 'transparent',
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  size?: 's' | 'l';
  border?: 'none' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'full';
  label: string;
  width?: string
  className?: string,
  isLink?: boolean,
  href?: string,
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    view = 'primary',
    href = '/',
    size,
    leftAddon,
    isLink,
    rightAddon,
    label,
    width,
    border = 'none',
    disabled = false,
    className = '',
    ...restButtonProps
  } = props;
  const classes = cn(
    styles.button,
    styles[view],
    styles[border],
    (leftAddon || rightAddon) && styles.addon,
    leftAddon && styles.leftAddon,
    rightAddon && styles.rightAddon,
    size === 'l' && styles.l,
    [className]
  );
  const buttonChildren = (
    <React.Fragment>
      {leftAddon && leftAddon}
      {<span className={styles.label}>{label}</span>}
      {rightAddon && rightAddon}
    </React.Fragment>
  );

  return (
    !isLink ?
      <button
        className={classes}
        type='button'
        disabled={disabled}
        style={{width}}
        {...restButtonProps}>
        {buttonChildren}
      </button>
      :
      <Link href={href}>
        <a
          className={cn(classes, styles.link)}>
          {buttonChildren}
        </a>
      </Link>
  );
};

