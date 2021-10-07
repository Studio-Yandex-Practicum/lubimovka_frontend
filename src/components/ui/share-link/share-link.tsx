import React, { FC } from 'react';
import cn from 'classnames';

import styles from './share-link.module.css';


interface ILinkProps {
  social: 'fb';
  label: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'number';
}

export const ShareLink: FC<ILinkProps> = (props) => {
  const {
    social,
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
  const tweeter = `https://twitter.com/intent/tweet?text=${encodeURI(document.title)}&url=${encodeURI('https://lubimovka.ru/')}%2F&utm_source=share2`;
  const facebook = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI('https://lubimovka.ru/')}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
  const vk = `https://vk.com/share.php?url=${encodeURI('https://lubimovka.ru/')}%2F&title=${encodeURI(document.title)}&utm_source=share2`;

  return (
    <a href={vk}
      className={classes}
      {...restButtonProps}
      rel="noopener noreferrer" target="_blank"
    >
      {children}
    </a>
  );
};

