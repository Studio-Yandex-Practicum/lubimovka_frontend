import classNames from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { CreditsList } from 'components/credits-list';

import type { VFC } from 'react';
import type { Url } from 'shared/types';
import type { CreditsRole } from 'components/credits-list';

import styles from './festival-event-card.module.css';

export interface FestivalEventCardProps {
  image?: Url
  time: string
  location: string
  title: string
  description: string
  credits: CreditsRole[]
  registrationUrl?: Url
  className?: string
}

const cx = classNames.bind(styles);

export const FestivalEventCard: VFC<FestivalEventCardProps> = (props) => {
  const {
    image,
    time,
    location,
    title,
    description,
    credits,
    registrationUrl,
    className
  } = props;

  return (
    <article className={cx('root', className)}>
      <h3 className={cx('title')}>
        {title}
      </h3>
      <div className={cx('imageHolder')}>
        {image && (
          <div className={cx('imageCanvas')}>
            <img
              className={cx('image')}
              src={image}
              alt=""
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
      <CreditsList
        size="s"
        className={cx('credits')}
        roles={credits}
      />
      {registrationUrl && (
        <div className={cx('actions')}>
          <Button
            size="s"
            border="bottom-left"
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            href={registrationUrl}
            target="_blank"
          >
            Регистрация
          </Button>
        </div>
      )}
    </article>
  );
};
