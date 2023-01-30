import cn from 'classnames/bind';
import React from 'react';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';

import type { Play } from 'core/play';

import styles from './play-card.module.css';

const cx = cn.bind(styles);

export interface PlayCardProps extends Omit<Play, 'id'> {
  className?: string
  titleTag?: React.ElementType
}

export const PlayCard: React.FC<PlayCardProps> = (props) => {
  const {
    className,
    title,
    titleTag: TitleTag = 'h3',
    authors,
    city,
    year,
    readingUrl,
    downloadUrl,
  } = props;

  return (
    <div className={cx('root', className)}>
      <div className={cx('tile')}>
        <TitleTag className={cx('title')}>
          {title}
        </TitleTag>
        <div className={cx('actions')}>
          {readingUrl && (
            <span className={cx('action')}>
              <Button
                href={readingUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                size="l"
                icon={(
                  <Icon
                    glyph="arrow-45"
                    width="100%"
                    height="100%"
                  />
                )}
                iconPosition="right"
                fullWidth
                upperCase
              >
                Смотреть читку
              </Button>
            </span>
          )}
          {downloadUrl && (
            <span className={cx('action')}>
              <Button
                href={downloadUrl}
                size="l"
                icon={(
                  <Icon
                    glyph="arrow-down"
                    width="100%"
                    height="100%"
                  />
                )}
                iconPosition="right"
                fullWidth
                upperCase
              >
                Скачать пьесу
              </Button>
            </span>
          )}
        </div>
      </div>
      <dl>
        <dt className={cx('semantic-only-note')}>
          {authors.length === 1 ? 'Автор' : 'Авторы'}
        </dt>
        {authors.map((author) => (
          <dd
            key={author.slug}
            className={cx('author')}
          >
            <InfoLink
              className={cx('author')}
              size="l"
              href={`/${author.slug}`}
              label={author.fullName}
            />
          </dd>
        )
        )}
        {city && (
          <>
            <dt className={cx('semantic-only-note')}>
              Город
            </dt>
            <dd className={cx('city')}>
              {city}
            </dd>
          </>
        )}
        {year && (
          <>
            <dt className={cx('semantic-only-note')}>
              Год
            </dt>
            <dd className={cx('year')}>
              {year}
            </dd>
          </>
        )}
      </dl>
    </div>
  );
};
