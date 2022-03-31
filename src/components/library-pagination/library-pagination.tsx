import React, { FC, useState, useEffect, useMemo } from 'react';
import cn from 'classnames';

import { InfoLink } from '../ui/info-link';
import { IAuthorInfo } from 'components/library-authors-page';

import style from './library-pagination.module.css';
import styles from '../library-pieces-page/index.module.css';
import LibraryPreloader from '../library-pieces-page/library-preloader/library-preloader';

interface LibraryPaginationProps {
  letters: string[];
  authors: Array<IAuthorInfo>;
  className?: string;
  onChange: (letter: string) => void;
  isLoading: boolean;
}

const LibraryPagination: FC<LibraryPaginationProps> = ({ letters, authors, className, onChange, isLoading }) => {
  const [letter, setLetter] = useState<string>('');
  const [letterElement, setLetterElement] = useState<HTMLInputElement | null>(null);

  const changeLetter = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, el: string) => {
    setLetter(el);
    setLetterElement(e.target as HTMLInputElement);
    onChange(el);
  };
  const chosenAuthors = useMemo(() => letter ? authors.filter((el) =>
    el.name.startsWith(letter)) : [], [letter, authors]);

  useEffect(() => {
    letterElement?.parentElement?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [letterElement]);

  return (
    <div className={style.container}>
      <ul className={cn(style.letters, [className])}>
        {letters.map((el) => (
          <li key={el} className={cn(style.letter, { [style.letterActive]: letter === el })}>
            <label htmlFor={el} className={style.label}>
              {el}
            </label>
            <input
              onClick={(e) => changeLetter(e, el)}
              type="radio"
              name="letter"
              id={el}
              value={el}
              className={style.inputRadio}
            />
          </li>
        ))}
      </ul>
      <div className={style.authors}>
        {isLoading ? (
          <div className={styles.loader}>
            <LibraryPreloader/>
          </div>
        ) : (
          <>
            <ul className={style.authorsList}>
              {chosenAuthors.length > 0 && chosenAuthors.map((el) => (
                <li key={el.slug} className={style.author}>
                  <InfoLink isOutsideLink={false} href={`/${el.slug}`} label={el.name} size="l" className={style.link}>
                    {el.name}
                  </InfoLink>
                </li>
              ))}
            </ul>
            <div className={style.chosenLetter}>
              <p className={style.bigLetter}>
                {letter}
              </p>
              <p className={style.authorsQuantity}>
                {letter && String(chosenAuthors.length)}
              </p>
            </div>
          </>
        )

        }
      </div>
    </div>
  );
};

export default LibraryPagination;
