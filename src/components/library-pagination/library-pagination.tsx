import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames';

import style from './library-pagination.module.css';

const mockLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

const mockAuthors = ['Августеняк Екатерина', 'Александрин Егор', 'Борисов Борис', 'Фёдоров Фёдор'];

interface LibraryPaginationProps {
  letters: string[]
}

const LibraryPagination: FC<LibraryPaginationProps> = ({letters = mockLetters}) => {
  const [authorsState, setAuthorsState] = useState({
    authors: [''],
    quantity: 0
  });

  const [letter, setLetter] = useState('');

  useEffect(() => {
    if (letter) {
      const currentAuthors = mockAuthors.filter((el) => el.startsWith(letter));
      setAuthorsState({
        authors: currentAuthors,
        quantity: currentAuthors.length
      });
    }
  }, [letter]);

  return (
    <div className={style.container}>
      <form className={style.letters}>
        {letters.map((el, index) => (
          <div key={index} className={cn(style.letter,{ [style.letterActive]: letter === el})}>
            <label htmlFor={el} className={style.label}>{el}</label>
            <input onClick={() => setLetter(el)} type="radio" name='letter' id={el} value={el} className={style.inputRadio}/>
          </div>
        ))}
      </form>
      <div className={style.authors}>
        <ul className={style.authorsList}>
          {authorsState.authors.length > 0 && authorsState.authors.map((el, index) => (
            <li key={index} className={style.author}>{el}</li>
          ))}
        </ul>
        <div className={style.chosenLetter}>
          <p className={style.bigLetter}>{letter}</p>
          <p className={style.authorsQuantity}>{letter && String(authorsState.quantity)}</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryPagination;
