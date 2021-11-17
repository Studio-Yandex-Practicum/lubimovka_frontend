import { FC } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { Url } from 'shared/types';
import { Button } from 'components/ui/button';

import styles from './performance-headline.module.css';

interface IPerformanceHeadlineProps {
  title: string,
  description: string,
  date: string,
  ticketsUrl: Url,
  text: string,
  image: Url,
}

const cx = classNames.bind(styles);

export const PerformanceHeadline: FC<IPerformanceHeadlineProps> = (props) => {
  const {
    title,
    description,
    date,
    ticketsUrl,
    image,
    text,
  } = props;

  return (
    <div className={cx('headline')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <p className={cx('description')}>
        {description}
      </p>
      <div className={cx('dateTime')}>
        {new Date(date).toLocaleString('ru-Ru', {month: 'long', day:'numeric', hour: '2-digit', minute: '2-digit'}).replace(',', '')}
      </div>
      <div className={cx('actions')}>
        <Button
          className={cx('action')}
          view="primary"
          href={ticketsUrl}
          size="l"
          isLink
          icon="arrow-right"
          iconPlace="right"
          label="Билеты"
          border="full"
        />
      </div>
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
