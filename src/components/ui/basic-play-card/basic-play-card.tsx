import React, { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from '../button';
import { InfoLink } from '../info-link';

import styles from './basic-play-card.module.css';

const cx  = cn.bind(styles);

export interface IBasicPlayCardProps {
  type?: 'performance';
  play: {
    title: string;
    city?: string;
    year?: number;
    readingUrl?: string;
    downloadUrl: string;
    authors: Author[];
  };
}

type Author = {
  slug: string,
  name: string,
}

export const BasicPlayCard: FC<IBasicPlayCardProps> = ({ play }) => {
  const {
    title,
    city,
    year,
    readingUrl,
    downloadUrl,
    authors
  } = play;

  const authorsHiddenLabel = (
    <React.Fragment>
      {authors.length > 1
        ? (
          <dt className={cx('hiddenText')}>
            Авторы:
          </dt>
        )
        :          (
          <dt className={cx('hiddenText')}>
            Автор:
          </dt>
        )
      }
    </React.Fragment>
  );

  return (
    <article
      className={cx('card')}
    >
      <div className={cx('container')}>
        <h6 className={cx('title')}>
          {title}
        </h6>
        <div>
          {
            readingUrl && (
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
            )
          }
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
        </div>
      </div>
      <dl className={cx('info')}>
        {authorsHiddenLabel}
        {authors.map((i) => (
          <dd className={cx('author', authors.length > 1 && 'authorMultiple')} key={i.slug}>
            <InfoLink
              isOutsideLink={false}
              href={`/library/authors/${i.slug}`}
              label={i.name}
              size="l"
              className={cx('author', authors.length > 1 && 'authorMultiple')}
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
