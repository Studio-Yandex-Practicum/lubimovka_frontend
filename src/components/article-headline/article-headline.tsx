import cn from 'classnames/bind';
import Image from 'next/image';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

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
        <Button
          size="s"
          border="none"
          href={authorUrl}
          icon={(
            <Icon
              glyph="arrow-45"
              width="100%"
              height="100%"
            />
          )}
          iconPosition="right"
          animation='invert'
          className={cx('author')}
        >
          {author}
        </Button>
      )}
    </section>
  );
};
