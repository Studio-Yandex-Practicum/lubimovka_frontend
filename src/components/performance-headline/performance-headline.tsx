import { FC } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { Url } from 'shared/types';

import styles from './performance-headline.module.css';

interface IPerformanceHeadlineProps {
  title: string,
  description: string,
  text: string,
  image: Url,
}

const cx = classNames.bind(styles);

export const PerformanceHeadline: FC<IPerformanceHeadlineProps> = (props) => {
  const {
    title,
    description,
    image,
    text,
  } = props;

  return (
    <div className={cx('headline')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <div className={cx('image')}>
        <Image
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className={cx('text')}>
        {text}
      </p>
    </div>
  );
};
