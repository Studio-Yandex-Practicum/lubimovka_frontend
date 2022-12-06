import React, { Fragment } from 'react';
import cn from 'classnames/bind';

import { Button } from '../ui/button';
import { InfoLink } from '../ui/info-link';

import type { FC } from 'react';

import styles from './play-card.module.css';

const cx  = cn.bind(styles);

type Author = {
  slug: string,
  name: string,
}

export interface PlayCardProps {
  play: {
    title: string;
    city?: string;
    year?: number;
    // Для полей readingUrl и downloadUrl null лишний, нужно попросить бекендеров убрать nullable у этих полей
    readingUrl?: string | null;
    downloadUrl?: string | null;
    authors: Author[];
  };
}

export const PlayCard: FC<PlayCardProps> = ({ play }) => {
  const {
    title,
    city,
    year,
    readingUrl,
    downloadUrl,
    authors
  } = play;

  return (
    <article
      className={cx('card')}
    >
      <div className={cx('container')}>
        <h6 className={cx('title')}>
          {title}
        </h6>
        <div>
          {readingUrl && (
            <Button
              className={cx('buttonCustom')}
              width="100%"
              size="l"
              view="primary"
              iconPlace="right"
              icon="arrow-45"
              label="Смотреть читку"
              border="top"
              isLink
              href={readingUrl}
            />
          )}
          {downloadUrl && (
            <Button
              className={cx('buttonCustom')}
              width="100%"
              size="l"
              view="primary"
              iconPlace="right"
              icon="arrow-down"
              label="Скачать пьесу"
              border="top"
              isLink
              href={downloadUrl}
            />
          )}
        </div>
      </div>
      <dl className={cx('info')}>
        {authors.length > 1 ? (
          <dt className={cx('hiddenText')}>
            Авторы:
          </dt>
        ) : (
          <dt className={cx('hiddenText')}>
            Автор:
          </dt>
        )}
        {authors.map((author) => (
          <dd className={cx('author', authors.length > 1 && 'authorMultiple')} key={author.slug}>
            <InfoLink
              className={cx('author', authors.length > 1 && 'authorMultiple')}
              href={`/${author.slug}`}
              label={author.name}
              size="l"
            />
          </dd>
        )
        )}
        {city && (
          <>
            <dt className={cx('hiddenText')}>
              Город:
            </dt>
            <dd className={cx('city')}>
              {city}
            </dd>
          </>
        )}
        {year && (
          <>
            <dt className={cx('hiddenText')}>
              Год:
            </dt>
            <dd className={cx('year')}>
              {year}
            </dd>
          </>
        )}
      </dl>
    </article>
  );
};
