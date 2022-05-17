import { FC } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button/button';
import { Url } from 'shared/types';

import styles from './event-card.module.css';

export interface IEventCardProps {
  image?: Url,
  time: string,
  location: string,
  title: string,
  description: string,
  playwright?: string,
  director?: string,
  registrationUrl?: Url,
  className?: string,
}

const cx = classNames.bind(styles);

export const EventCard: FC<IEventCardProps> = (props) => {
  const {
    image,
    time,
    location,
    title,
    description,
    playwright,
    director,
    registrationUrl,
    className
  } = props;

  return (
    <article className={cx('card', className)}>
      <h3 className={cx('title')}>
        {title}
      </h3>
      <div className={cx('imageHolder')}>
        {image && (
          <div className={cx('imageCanvas')}>
            <img
              className={cx('image')}
              src={image}
            />
          </div>
        )}
      </div>
      <dl className={cx('timeLocation')}>
        <dt className={cx('hiddenText')}>
          Время
        </dt>
        <dd className={cx('time')}>
          {time}
        </dd>
        <dt className={cx('hiddenText')}>
          Место
        </dt>
        <dd className={cx('location')}>
          {location}
        </dd>
      </dl>
      <p className={cx('description')}>
        {description}
      </p>
      {(playwright || director) && (
        <dl className={cx('credits')}>
          {playwright && (
            <>
              <dt className={cx('creditsTitle')}>
                Драматург
              </dt>
              <dd className={cx('creditsValue')}>
                {playwright}
              </dd>
            </>
          )}
          {director && (
            <>
              <dt className={cx('creditsTitle')}>
                Режиссёр
              </dt>
              <dd className={cx('creditsValue')}>
                {director}
              </dd>
            </>
          )}
        </dl>
      )}
      {registrationUrl && (
        <div className={cx('actions')}>
          <Button
            view="primary"
            size="s"
            iconPlace="left"
            icon="arrow-right"
            label="Регистрация"
            border="bottomLeft"
            href={registrationUrl}
            isLink
          />
        </div>
      )}
    </article>
  );
};
