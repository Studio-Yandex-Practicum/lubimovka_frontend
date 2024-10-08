import classNames from 'classnames/bind';

import { CreditsList } from 'components/credits-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { CreditsRole } from 'components/credits-list';

import styles from './festival-event-card.module.css';

export interface FestivalEventCardProps {
  image?: Url
  time: string
  location?: string | null
  title: string
  description?: string
  credits: CreditsRole[]
  aboutUrl?: string
  actionUrl?: Url | null
  actionText?: string | null
  className?: string
}

const cx = classNames.bind(styles);

export const FestivalEventCard: React.VFC<FestivalEventCardProps> = (props) => {
  const {
    image,
    time,
    location,
    title,
    description,
    credits,
    aboutUrl,
    actionUrl,
    actionText,
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
          <span className={cx('timeZone')}>
            мск
          </span>
        </dd>
        <dt className={cx('hiddenText')}>
          Место
        </dt>
        <dd className={cx('location')}>
          {location}
        </dd>
      </dl>
      {description && (
        <p className={cx('description')}>
          {description}
        </p>
      )}
      <CreditsList
        size="s"
        className={cx('credits')}
        roles={credits}
      />
      <div className={cx('actions')}>
        {aboutUrl && (
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
            href={aboutUrl}
            className={cx('button')}
            target="_blank"
            upperCase
          >
            О спектакле
          </Button>
        )}
        {actionUrl && actionText && (
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
            href={actionUrl}
            className={cx('button')}
            target="_blank"
            upperCase
          >
            {actionText}
          </Button>
        )}
      </div>

    </article>
  );
};
