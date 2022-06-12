import classNames from 'classnames/bind';
import { Fragment } from 'react';

import type { VFC } from 'react';

import styles from './article-credits-list.module.css';

type ArticleCreditsListItem = {
  name: string
  persons: string[]
}

interface ArticleCreditsListProps {
  items: ArticleCreditsListItem[]
}

const cx = classNames.bind(styles);

export const ArticleCreditsList: VFC<ArticleCreditsListProps> = (props) => {
  const { items } = props;

  return (
    <dl className={cx('root')}>
      {items.map(({ name, persons }) => (
        <Fragment key={name}>
          <dt className={cx('role')}>
            {name}
          </dt>
          <dd className={cx('persons')}>
            {persons.join(', ')}
          </dd>
        </Fragment>
      ))}
    </dl>
  );
};
