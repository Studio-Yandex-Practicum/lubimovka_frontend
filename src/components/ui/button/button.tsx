import React, {FC, ButtonHTMLAttributes} from 'react';
import Link from 'next/link';
import cn from 'classnames/bind';
import {Icon, IIconProps} from '../icon';

import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'primary' | 'secondary',
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

const cx = cn.bind(styles);

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

  const classes = cx('button', view, border, icon && 'addon', iconPlace, iconPlace, size, [className]);

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
      <Link href={href} {...restButtonProps}>
        <a
          className={cx(classes, 'link')}>
          {buttonChildren}
        </a>
      </Link>
  );
};

