import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';
import type { Url } from 'shared/types';

import styles from './teaser-card.module.css';

interface TeaserCardProps {
  title: string
  description: string
  image: Url
  actionText: string
  url: Url
}

const cx = classNames.bind(styles);

export const TeaserCard: FC<TeaserCardProps> = (props) => {
  const {
    title,
    description,
    image,
    actionText,
    url,
  } = props;

  return (
    <div className={cx('root')}>
      <h3 className={cx('title')}>
        {title}
      </h3>
      <p className={cx('description')}>
        {description}
      </p>
      <div className={cx('action')}>
        <Link
          href={url}
          passHref
        >
          <Button
            size="s"
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            border="bottom-left"
            upperCase
            target="_blank"
          >
            {actionText}
          </Button>
        </Link>
      </div>
      <div className={cx('image-container')}>
        <Image
          src={image}
          alt={title}
          width={486}
          height={228}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
