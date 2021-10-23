import { FC } from 'react';
import { InfoLink } from '../info-link';

import styles from './share-link.module.css';
import cn from 'classnames';

interface IShareLinkProps {
  icon: 'arrow-right',
  iconPlace: 'left',
  size: 's',
  border: 'borderBottomLeft'
}

const facebook = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
const vk = `https://vk.com/share.php?url=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
const tweeter = `https://twitter.com/intent/tweet?text=${encodeURI(document.title)}&url=${encodeURI(document.location.href)}%2F&utm_source=share2`;

export const ShareLink: FC<IShareLinkProps> = ({ icon, iconPlace, size, border }) => {
  return (
    <div className={cn(styles.container)}>
      <InfoLink href={facebook} label='fb' icon={icon} iconPlace={iconPlace} size={size} border={border} />
      <InfoLink href={vk} label='vk' icon={icon} iconPlace={iconPlace} size={size} border={border} />
      <InfoLink href={tweeter} label='twtr' icon={icon} iconPlace={iconPlace} size={size} border={border} />
    </div>
  );
};
