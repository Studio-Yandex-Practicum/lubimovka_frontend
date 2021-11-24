import React, { FC, useState, useEffect, useMemo } from 'react';
import cn from 'classnames';

import style from './library-pagination.module.css';

interface LibraryPaginationProps {
  letters: string[];
  top?: string;
  authors: string[];
  className?: string;
}

const LibraryPagination: FC<LibraryPaginationProps> = ({ letters, top, authors, className }) => {
  const [letter, setLetter] = useState<string>('');
  const [letterElement, setLetterElement] = useState<HTMLInputElement | null>(null);
  const chosenAuthors = useMemo(() => letter ? authors.filter((el) =>
    el.startsWith(letter)) : [], [letter]);

  useEffect(() => {
    letterElement?.parentElement?.scrollIntoView({ 'block': 'nearest', 'behavior': 'smooth' });
  }, [letterElement]);

  return (
    <div className={style.container}>
      <ul style={{ top: top }} className={cn(style.letters, [className])}>
        {letters.map((el, index) => (
          <li key={index} className={cn(style.letter, { [style.letterActive]: letter === el })}>
            <label htmlFor={el} className={style.label}>{el}</label>
            <input onClick={(e) => {setLetter(el); setLetterElement(e.target as HTMLInputElement);}}
              type='radio' name='letter' id={el} value={el} className={style.inputRadio}/>
          </li>
        ))}
      </ul>
      <div className={style.authors}>
        <ul className={style.authorsList}>
          {chosenAuthors.length > 0 && chosenAuthors.map((el, index) => (
            <li key={index} className={style.author}><a href='#' className={style.link}>{el}</a></li>
          ))}
        </ul>
        <div className={style.chosenLetter}>
          <p className={style.bigLetter}>{letter}</p>
          <p className={style.authorsQuantity}>{letter && String(chosenAuthors.length)}</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryPagination;
