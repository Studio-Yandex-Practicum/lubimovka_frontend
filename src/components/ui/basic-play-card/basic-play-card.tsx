import React, { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from '../button';
import { InfoLink } from '../info-link';
import { AuthorForPlay } from 'api-typings';

import styles from './basic-play-card.module.css';

const cx  = cn.bind(styles);

export interface IBasicPlayCardProps {
  type?: 'performance';
  play: {
    id?: number;
    title: string;
    city?: string;
    year?: number;
    linkView?: string;
    linkDownload: string;
    authors: AuthorForPlay[];
  };
  buttonVisibility?: boolean;
}

export const BasicPlayCard: FC<IBasicPlayCardProps> = (props) => {
  const {
    play,
    buttonVisibility,
  } = props;

  const authorsHiddenLabel = (
    <React.Fragment>
      {play.authors.length > 1
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
          {play.title}
        </h6>
        <div>
          {
            play.linkView && (
              <Button
                className={cx('buttonCustom', buttonVisibility && 'buttonVisible')}
                width="100%"
                size="l"
                view="primary"
                iconPlace="right"
                icon="arrow-45"
                label="Смотреть читку"
                border="top"
                isLink
                href={play.linkView}
              />
            )
          }
          <Button
            className={cx('buttonCustom', buttonVisibility && 'buttonVisible')}
            width="100%"
            size="l"
            view="primary"
            iconPlace="right"
            icon="arrow-down"
            label="Скачать пьесу"
            border="top"
            isLink
            href={play.linkDownload}
          />
        </div>
      </div>
      <dl className={cx('info')}>
        {authorsHiddenLabel}
        {play.authors.map((item, i) => (
          <dd className={cx('author', play.authors.length > 1 && 'authorMultiple')} key={item.slug + i}>
            <InfoLink
              isOutsideLink={false}
              href={`/library/authors/${item.slug}`}
              label={item.name}
              size="l"
              className={cx('author', play.authors.length > 1 && 'authorMultiple')}
            />
          </dd>
        )
        )}
        {play.city && (
          <>
            <dt className={cx('hiddenText')}>
              Город:
            </dt>
            <dd className={cx('city')}>
              {play.city}
            </dd>
          </>
        )}
        {play.year && (
          <>
            <dt className={cx('hiddenText')}>
              Год:
            </dt>
            <dd className={cx('year')}>
              {play.year}
            </dd>
          </>
        )}
      </dl>
    </article>
  );
};
