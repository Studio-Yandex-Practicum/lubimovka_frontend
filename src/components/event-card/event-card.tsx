import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

import { CreditsList } from 'components/credits-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { Url } from 'shared/types';
import type { CreditsRole } from 'components/credits-list';

import styles from './event-card.module.css';

interface EventCardProps {
  className?: string
  imageUrl?: Url
  date: string
  time: string
  title: string
  team: CreditsRole[]
  description?: string
  projectTitle?: string
  performanceUrl?: string
  actionUrl: Url
  actionText: string
}

const cx = classNames.bind(styles);

export const EventCard = forwardRef<HTMLDivElement, EventCardProps>((props, ref) => {
  const {
    imageUrl,
    date,
    time,
    title,
    team,
    description,
    projectTitle,
    performanceUrl,
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
          <div className={cx('description')}>
            <p>
              {description}
            </p>
            {projectTitle && (
              <p>
                читка проекта
                {' '}
                {projectTitle}
              </p>
            )}
          </div>
        )}
      </div>
      <div className={cx('actions')}>
        {performanceUrl && (
          <Link
            href={performanceUrl}
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
              О спектакле
            </Button>
          </Link>
        )}
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
      </div>
    </div>
  );
});

EventCard.displayName = 'EventCard';
