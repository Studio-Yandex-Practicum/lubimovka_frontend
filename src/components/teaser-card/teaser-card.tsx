import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'components/ui/button';

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
      <div className={cx('container')}>
        <div className={cx('content')}>
          <p className={cx('description')}>
            {description}
          </p>
          {/* TODO: заменить компонент кнопки */}
          <Button
            label={actionText}
            iconPlace="left"
            icon="arrow-right"
            gap="4px"
            border="bottomLeft"
            isLink
            href={url}
            className={cx('button')}
            target="_blank"
          />
        </div>
        <Link href={url}>
          <a
            className={cx('link')}
            target="_blank"
          >
            <Image
              src={image}
              alt={title}
              width={486}
              height={228}
              layout="responsive"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
