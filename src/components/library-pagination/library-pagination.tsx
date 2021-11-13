import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames';

import style from './library-pagination.module.css';

interface LibraryPaginationProps {
  letters: string[];
  top: string;
  authors: string[];
}

const LibraryPagination: FC<LibraryPaginationProps> = ({ letters, top, authors }) => {
  const [chosenAuthors, setChosenAuthors] = useState<Array<string>>(['']);
  const [letter, setLetter] = useState<string>('');

  useEffect(() => {
    if (letter) {
      const currentAuthors = authors.filter((el) => el.startsWith(letter));
      setChosenAuthors(currentAuthors);
    }
  }, [letter]);

  return (
    <div className={style.container}>
      <ul style={{top: top}} className={style.letters}>
        {letters.map((el, index) => (
          <li key={index} className={cn(style.letter,{ [style.letterActive]: letter === el})}>
            <label htmlFor={el} className={style.label}>{el}</label>
            <input onClick={() => setLetter(el)} type='radio' name='letter' id={el} value={el} className={style.inputRadio}/>
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
