import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './review-card.module.css';

interface IReviewCardProps {
  text: string,
  author: string,
}

const cx = classNames.bind(styles);

export const ReviewCard: FC<IReviewCardProps> = (props) => {
  const {
    text,
    author,
  } = props;

  return (
    <article className={cx('card')}>
      <p className={cx('text')}>
        {text}
      </p>
      <dl className={cx('info')}>
        <dt className={cx('hiddenText')}>
          Автор:
        </dt>
        <dd className={cx('author')}>
          {author}
        </dd>
      </dl>
    </article>
  );
};
