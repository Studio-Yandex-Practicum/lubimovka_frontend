import React, { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { Icon, IIconProps } from '../icon';

import styles from './info-link.module.css';


interface ILinkProps {
  isOutsideLink?: boolean;
  shareLink: boolean;
  href?: string;
  label: string;
  icon?: IIconProps['glyph'],
  iconPlace?: 'iconNone' | 'left' | 'right';
  hoverStyle?: 'invert' | 'bottomLine' | 'bottomLineAndInvert';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'number';
  textDecoration?: 'textDecorationNone' | 'underline';
  border?: 'borderNone' | 'borderBottomLeft' | 'borderTop';
}

const facebook = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
const vk = `https://vk.com/share.php?url=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
const tweeter = `https://twitter.com/intent/tweet?text=${encodeURI(document.title)}&url=${encodeURI(document.location.href)}%2F&utm_source=share2`;

export const InfoLink: FC<ILinkProps> = (props) => {
  const {
    isOutsideLink = false,
    shareLink = false,
    href = '/',
    label,
    icon,
    iconPlace = 'iconNone',
    hoverStyle = 'invert',
    size = 's',
    textDecoration = 'textDecorationNone',
    border = 'borderNone',
    ...restButtonProps
  } = props;

  const classes = cn(
    styles.link,
    styles[size],
    styles[textDecoration],
    styles[border],
    styles[hoverStyle]
  );

  const linkChildren = (
    <React.Fragment>
      {iconPlace === 'left' && icon && <Icon glyph={icon}/>}
      {<span className={cn(styles.label, styles[iconPlace])}>{label}</span>}
      {iconPlace === 'right' && icon && <Icon glyph={icon}/>}
    </React.Fragment>
  );

  return (
    <>
      {!shareLink &&
      !isOutsideLink &&
      <Link href={href}>
        <a className={classes}
          {...restButtonProps}
        >
          {linkChildren}
        </a>
      </Link>
      ||
      !shareLink &&
      <a href={href}
        className={classes}
        {...restButtonProps}
        rel="noopener noreferrer" target="_blank"
      >
        {linkChildren}
      </a>}

      {shareLink &&
        <div className={cn(styles.container)}>
          <a href={facebook}
            className={classes}
            {...restButtonProps}
            rel="noopener noreferrer" target="_blank"
          >
            {icon && <Icon glyph={icon}/>}
            <span className={cn(styles.label)}>Fb</span>
          </a>
          <a href={vk}
            className={classes}
            {...restButtonProps}
            rel="noopener noreferrer" target="_blank"
          >
            {icon && <Icon glyph={icon}/>}
            <span className={cn(styles.label)}>Vk</span>
          </a>
          <a href={tweeter}
            className={classes}
            {...restButtonProps}
            rel="noopener noreferrer" target="_blank"
          >
            {icon && <Icon glyph={icon}/>}
            <span className={cn(styles.label)}>Twtr</span>
          </a>
        </div>}
    </>
  );
};
