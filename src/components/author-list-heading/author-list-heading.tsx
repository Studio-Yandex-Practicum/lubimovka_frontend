import classNames from 'classnames/bind';

import type { VFC } from 'react';
import type { AlphabeticalPaginationLetter } from 'shared/constants/alphabetical-pagination-letters';

import styles from './author-list-heading.module.css';

interface AuthorLetterProps {
  pending?: boolean
  letter: AlphabeticalPaginationLetter
  totalAuthors?: number
}

const cx = classNames.bind(styles);

export const AuthorListHeading: VFC<AuthorLetterProps> = (props) => {
  const {
    pending,
    letter,
    totalAuthors,
  } = props;

  return (
    <div className={cx('root', { pending })}>
      <h3 className={cx('title')}>
        <span className={cx('semantic-only-note')}>
          Авторы на букву
          {' '}
          «
        </span>
        {letter.toUpperCase()}
        <span className={cx('semantic-only-note')}>
          »
        </span>
      </h3>
      <p className={cx('subtitle')}>
        <span className={cx('semantic-only-note')}>
          Всего:
          {' '}
        </span>
        {totalAuthors}
      </p>
    </div>
  );
};
