import Image from 'next/image';
import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './banner.module.css';

interface BannerProps {
  image: Url
  title?: string
  className?: string
}

const cx = classNames.bind(styles);

export const Banner: FC<BannerProps> = (props) => {
  const {
    image,
    title = '',
    className
  } = props;

  return (
    <div
      className={cx(
        'root',
        className,
      )}
    >
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt={title}
      />
    </div>
  );
};

