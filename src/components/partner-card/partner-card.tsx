import classNames from 'classnames/bind';
import Image from 'next/image';

import type { VFC } from 'react';

import styles from './partner-card.module.css';

interface PartnerCardProps {
  variant?: 'regular' | 'compact'
  titleTag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  name: string
  description?: string
  logo: Url
  url: Url
}

const cx = classNames.bind(styles);

const PartnerCard: VFC<PartnerCardProps> = (props) => {
  const {
    variant = 'regular',
    titleTag: TitleTag = 'h3',
    name,
    description,
    logo,
    url,
  } = props;

  return (
    <div className={cx('root', [variant])}>
      <div className={cx('logo-canvas')}>
        <Image
          className={cx('logo')}
          src={logo}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <a
        className={cx('link')}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <TitleTag className={cx('title')}>
          {name}
        </TitleTag>
        {description && (
          <p className={cx('description')}>
            {description}
          </p>
        )}
      </a>
    </div>
  );
};

export default PartnerCard;
