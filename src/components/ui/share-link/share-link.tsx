import React, { FC } from 'react';
import cn from 'classnames';

import styles from './info-link.module.css';


interface ILinkProps {
  href?: string;
  label: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'number';
}

export const InfoLink: FC<ILinkProps> = (props) => {
  const {
    href = '/',
    label,
    size = 's',
    ...restButtonProps
  } = props;

  const classes = cn(
    styles.link,
    styles[size],
  );

  const children = (
    <React.Fragment>
      {<span className={cn(styles.label)}>{label}</span>}
    </React.Fragment>
  );

  return (
    <a href={href}
      className={classes}
      {...restButtonProps}
      rel="noopener noreferrer" target="_blank"
    >
      {children}
    </a>
  );
};
