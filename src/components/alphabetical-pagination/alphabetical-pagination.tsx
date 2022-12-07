import { useCallback } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { alphabeticalPaginationLetters } from 'shared/constants/alphabetical-pagination-letters';

import type { VFC } from 'react';
import type { AlphabeticalPaginationLetter } from 'shared/constants/alphabetical-pagination-letters';

import styles from './alphabetical-pagination.module.css';

interface AlphabeticalPaginationProps {
  availableLetters: AlphabeticalPaginationLetter[]
  currentLetter: AlphabeticalPaginationLetter
  onLetterChange?: (letter: AlphabeticalPaginationLetter) => void
}

const cx = classNames.bind(styles);

export const AlphabeticalPagination: VFC<AlphabeticalPaginationProps> = (props) => {
  const {
    availableLetters,
    currentLetter,
    onLetterChange,
  } = props;

  const handleLetterChange = useCallback((letter: AlphabeticalPaginationLetter) => () => {
    if (onLetterChange) {
      onLetterChange(letter);
    }
  }, [onLetterChange]);

  return (
    <nav>
      <ul className={cx('list')}>
        {alphabeticalPaginationLetters.map((letter) => {
          const current = letter === currentLetter;
          const disabled = !availableLetters.includes(letter);

          return (
            <li
              key={letter}
              className={cx('item')}
            >
              {current || disabled ? (
                <span className={cx('link', { current, disabled })}>
                  {letter}
                </span>
              ) : (
                <Link
                  href={{
                    query: { letter },
                  }}
                  shallow
                  passHref
                >
                  <a
                    className={cx('link')}
                    onClick={handleLetterChange(letter)}
                  >
                    {letter}
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
