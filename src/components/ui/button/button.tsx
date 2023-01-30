import cn from 'classnames/bind';
import Link from 'next/link';

import { Icon } from '../icon';

import type { IIconProps } from '../icon';
import type { ButtonHTMLAttributes,FC } from 'react';

import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
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
  align?: 'start' | 'end' | 'center' | 'space-between',
  gap?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

const cx = cn.bind(styles);

export const Button: FC<IButtonProps> = (props) => {
  const {
    type = 'button',
    view = 'primary',
    href = '/',
    size,
    isLink,
    icon,
    iconPlace,
    label,
    width,
    align = 'space-between',
    border = 'none',
    disabled = false,
    className = '',
    gap = '0',
    target,
    ...restButtonProps
  } = props;

  const classes = cx('button', view, border, icon && 'addon', iconPlace, iconPlace, size, [className]);
  const style = { width: width, justifyContent: align, columnGap: gap };
  const buttonChildren = (
    <>
      {iconPlace === 'left' && icon && <Icon glyph={icon}/>}
      {<span className={styles.label}>
        {label}
      </span>}
      {iconPlace === 'right' && icon && <Icon glyph={icon}/>}
    </>
  );

  return (
    !isLink ? (
      <button
        className={classes}
        type={type}
        disabled={disabled}
        style={style}
        {...restButtonProps}
      >
        {buttonChildren}
      </button>
    ) : (
      <Link href={href} {...restButtonProps}>
        <a
          style={style}
          target={target}
          className={cx(classes, 'link')}
        >
          {buttonChildren}
        </a>
      </Link>
    )
  );
};
