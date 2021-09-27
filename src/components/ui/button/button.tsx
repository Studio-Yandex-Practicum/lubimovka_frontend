import React, {FC, ButtonHTMLAttributes} from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './button.module.css';
import {Icon, IIconProps} from '../icon';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'primary' | 'secondary' | 'transparent',
  iconPlace?: 'left' | 'right',
  icon?: IIconProps['glyph'],
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
    isLink,
    icon,
    iconPlace,
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
    icon && styles.addon,
    iconPlace === 'left' && styles.leftAddon,
    iconPlace === 'right' && styles.rightAddon,
    size === 'l' && styles.l,
    [className]
  );
  const buttonChildren = (
    <React.Fragment>
      {iconPlace === 'left' && icon && <Icon glyph={icon}/>}
      {<span className={styles.label}>{label}</span>}
      {iconPlace === 'right' && icon && <Icon glyph={icon}/>}
    </React.Fragment>
  );

  return (
    !isLink &&
      <button
        className={classes}
        type='button'
        disabled={disabled}
        style={{width}}
        {...restButtonProps}>
        {buttonChildren}
      </button>
      ||
      <Link href={href}>
        <a
          className={cn(classes, styles.link)}>
          {buttonChildren}
        </a>
      </Link>
  );
};

