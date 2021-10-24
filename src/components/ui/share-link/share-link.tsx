import { FC } from 'react';
import { InfoLink } from '../info-link';

import styles from './share-link.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IShareLinkProps {
  icon: 'arrow-right',
  iconPlace: 'left',
  size: 's',
  border: 'borderBottomLeft',
  className?: string
}

const facebook = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
const vk = `https://vk.com/share.php?url=${encodeURI(document.location.href)}%2F&title=${encodeURI(document.title)}&utm_source=share2`;
const tweeter = `https://twitter.com/intent/tweet?text=${encodeURI(document.title)}&url=${encodeURI(document.location.href)}%2F&utm_source=share2`;

export const ShareLink: FC<IShareLinkProps> = (props) => {
  const { icon, iconPlace, size, border, className } = props;

  return (
    <div className={cx('container', className)}>
      <InfoLink href={facebook} label='Fb' icon={icon} iconPlace={iconPlace} size={size} border={border} />
      <InfoLink href={vk} label='Vk' icon={icon} iconPlace={iconPlace} size={size} border={border} />
      <InfoLink href={tweeter} label='Twtr' icon={icon} iconPlace={iconPlace} size={size} border={border} />
    </div>
  );
};
