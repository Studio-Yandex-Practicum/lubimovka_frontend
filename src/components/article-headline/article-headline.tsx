import cn from 'classnames/bind';
import Image from 'next/image';

import { InfoLink } from 'components/ui/info-link';

import type { FC } from 'react';

import styles from './article-headline.module.css';

type ArticleHeadlineProps = {
  variant: 'news' | 'blog'
  title: string
  description: string
  date: string
  cover?: Url
} & ({
  author: string
  authorUrl: Url
} | {
  author?: never
  authorUrl?: never
})

const cx = cn.bind(styles);

export const ArticleHeadline: FC<ArticleHeadlineProps> = (props) => {
  const {
    variant,
    title,
    description,
    date,
    author,
    authorUrl,
    cover,
  } = props;

  return (
    <section className={cx(variant)}>
      {cover && (
        <div className={cx('cover')}>
          <Image
            src={cover}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <h3 className={cx('title')}>
        {title}
      </h3>
      <p className={cx('description')}>
        {description}
      </p>
      <time className={cx('date')}>
        {date}
      </time>
      {author && (
        <InfoLink
          className={cx('author')}
          isOutsideLink
          label={author}
          icon={'arrow-45'}
          iconPlace={'right'}
          size={'m'}
          href={authorUrl}
        />
      )}
    </section>
  );
};
