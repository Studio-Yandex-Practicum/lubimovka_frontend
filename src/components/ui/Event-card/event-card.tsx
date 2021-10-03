import { FC } from 'react';
import { Button } from 'components/ui/button/button';
import classNames from 'classnames/bind';
import styles from './event-card.module.css';
import { Url } from 'shared/types';

interface IEventCardProps {
  image?: Url,
  time: string,
  location: string,
  title: string,
  description: string,
  playwright?: string,
  director?: string,
  registrationUrl?: Url,
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
  } = props;

  return (
    <article className={cx('card')}>
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
          <dt className={cx('creditsTitle')}>
            Драматург
          </dt>
          <dd className={cx('creditsValue')}>
            {playwright}
          </dd>
          <dt className={cx('creditsTitle')}>
            Режиссёр
          </dt>
          <dd className={cx('creditsValue')}>
            {director}
          </dd>
        </dl>
      )}
      {registrationUrl && (
        <div className={cx('actions')}>
          <Button size="s"
            iconPlace="left"
            icon="arrow-right"
            label="Регистрация"
            border="bottomLeft"
            view="primary"
            href={registrationUrl}></Button>
        </div>
      )}
    </article>
  );
};
