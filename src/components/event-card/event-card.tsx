import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

import { CreditsList } from 'components/credits-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { CreditsRole } from 'components/credits-list';

import styles from './event-card.module.css';

interface EventCardProps {
  className?: string
  imageUrl?: Url
  date: string
  time: string
  title: string
  type: string
  team: CreditsRole[]
  description?: string
  aboutText?: string
  aboutUrl?: string
  actionUrl: Url | null
  actionText: string | null
}

const cx = classNames.bind(styles);

export const EventCard = forwardRef<HTMLDivElement, EventCardProps>((props, ref) => {
  const {
    imageUrl,
    date,
    time,
    title,
    type,
    team,
    description,
    aboutUrl,
    aboutText,
    actionUrl,
    actionText,
    className
  } = props;

  return (
    <div
      className={cx('root', className)}
      ref={ref}
    >
      {imageUrl && (
        <div className={cx('image')}>
          <Image
            className={cx('image')}
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      )}
      <div className={cx('summary')}>
        <time className={cx('date-time')}>
          <span className={cx('date')}>
            {date}
          </span>
          <span>
            {time}
          </span>
        </time>
        <h3 className={cx('title')}>
          {title}
        </h3>
        <CreditsList
          className={cx('credits')}
          size="s"
          roles={team}
        />
        {description && (
          <p className={cx('description')}>
            {description}
          </p>
        )}
        <p className={cx('type')}>
          {type}
        </p>
      </div>
      <div className={cx('actions')}>
        {aboutUrl && aboutText && (
          <Link
            href={aboutUrl}
            passHref
          >
            <Button
              className={cx('action')}
              size="s"
              border="bottom-left"
              upperCase
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
            >
              {aboutText}
            </Button>
          </Link>
        )}
        {actionUrl && actionText && (
          <Button
            className={cx('action')}
            size="s"
            border="bottom-left"
            upperCase
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            href={actionUrl}
            target="_blank"
          >
            {actionText}
          </Button>
        )}
      </div>
    </div>
  );
});

EventCard.displayName = 'EventCard';
