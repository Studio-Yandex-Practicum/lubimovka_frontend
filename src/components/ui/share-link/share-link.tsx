import React, { FC } from 'react';
import cn from 'classnames';

import { Icon, IIconProps } from '../icon';

import styles from './share-link.module.css';

interface IShareLinkProps {
  social: 'Fb' | 'Vk' | 'Twtr';
  label: string;
  icon?: IIconProps['glyph'];
}

export const ShareLink: FC<IShareLinkProps> = (props) => {
  const {
    social,
    label,
    icon = 'arrow-right',
    ...restButtonProps
  } = props;

  const facebook = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
  const vk = `https://vk.com/share.php?url=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
  const tweeter = `https://twitter.com/intent/tweet?text=${encodeURI(document.title)}&url=${encodeURI(document.location.href)}%2F&utm_source=share2`;

  const children = (
    <React.Fragment>
      {icon && <Icon glyph={icon}/>}
      {<span className={cn(styles.label)}>{label}</span>}
    </React.Fragment>
  );

  return (
    <a href={(social === 'Fb') ? facebook : (social === 'Vk') ? vk : tweeter}
      className={cn(styles.link)}
      {...restButtonProps}
      rel="noopener noreferrer" target="_blank"
    >
      {children}
    </a>
  );
};

