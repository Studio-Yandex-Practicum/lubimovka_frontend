import Image from 'next/image';
import classNames from 'classnames/bind';

import type { Url } from 'shared/types';
import type { VFC } from 'react';

import styles from './partner-card.module.css';

interface PartnerCardProps {
  name?: string
  description?: string
  logo: Url
  url?: Url
}

const cx = classNames.bind(styles);

const PartnerCard: VFC<PartnerCardProps> = (props) => {
  const {
    name,
    description,
    logo,
    url,
  } = props;

  return (
    <div className={cx('root')}>
      <div className={cx('logo-canvas')}>
        <Image
          className={cx('logo')}
          src={logo}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      {description && (
        <span className={cx('description')}>
          {description}
        </span>
      )}
      {url && (
        <a
          className={cx('link')}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span className={cx('hidden-text')}>
            {name}
          </span>
        </a>
      )}
    </div>
  );
};

export default PartnerCard;
