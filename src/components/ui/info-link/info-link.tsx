import React, { FC } from 'react';
import Link from 'next/link';

import { Icon, IIconProps } from '../icon';
import styles from './info-link.module.css';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export interface ILinkProps {
  isOutsideLink?: boolean;
  href?: string;
  label: string;
  icon?: IIconProps['glyph'],
  iconPlace?: 'iconNone' | 'left' | 'right';
  hoverStyle?: 'invert' | 'bottomLine' | 'bottomLineAndInvert';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'number';
  textDecoration?: 'textDecorationNone' | 'underline';
  border?: 'borderNone' | 'borderBottomLeft' | 'borderTop';
  className?: string;
}

export const InfoLink: FC<ILinkProps> = (props) => {
  const {
    isOutsideLink = false,
    href = '/',
    label,
    icon,
    iconPlace = 'iconNone',
    hoverStyle = 'invert',
    size = 's',
    textDecoration = 'textDecorationNone',
    border = 'borderNone',
    className,
    ...restLinkProps
  } = props;

  const classes = cx(
    'link',
    icon && 'flex',
    [size],
    [textDecoration],
    [border],
    [hoverStyle],
    className
  );

  const linkChildren = (
    <React.Fragment>
      {iconPlace === 'left' && icon && <Icon glyph={icon}/>}
      {<span className={cx('label', [iconPlace])}>{label}</span>}
      {iconPlace === 'right' && icon && <Icon glyph={icon}/>}
    </React.Fragment>
  );

  return (
    !isOutsideLink &&
    <Link href={href}>
      <a className={classes}
        {...restLinkProps}
      >
        {linkChildren}
      </a>
    </Link>
    ||
    <a href={href}
      className={classes}
      {...restLinkProps}
      rel="noopener noreferrer" target="_blank"
    >
      {linkChildren}
    </a>
  );
};
