import { FC, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { InfoLink } from '../info-link';

import styles from './share-link.module.css';

const cx = classNames.bind(styles);

const icon = 'arrow-right';
const iconPlace = 'left';
const size = 's';
const border = 'borderBottomLeft';

interface IShareLinkProps {
  className?: string
}

export const ShareLink: FC<IShareLinkProps> = (props) => {
  const { className } = props;

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const baseUrl = document.location.href;
    const title = document.title;

    setUrl(baseUrl);
    setTitle(title);
  }, []);

  const facebook = `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(url)}%2F&title=${encodeURI(title)}&utm_source=share2`;
  const vk = `https://vk.com/share.php?url=${encodeURI(url)}%2F&title=${encodeURI(title)}&utm_source=share2`;
  const tweeter = `https://twitter.com/intent/tweet?text=${encodeURI(title)}&url=${encodeURI(url)}%2F&utm_source=share2`;

  return (
    <div className={cx('container', className)}>
      <InfoLink href={facebook} label="Fb" icon={icon} iconPlace={iconPlace} size={size} border={border} className={cx('links')}/>
      <InfoLink href={vk} label="Vk" icon={icon} iconPlace={iconPlace} size={size} border={border} className={cx('links')}/>
      <InfoLink href={tweeter} label="Twtr" icon={icon} iconPlace={iconPlace} size={size} border={border} className={cx('links')}/>
    </div>
  );
};
