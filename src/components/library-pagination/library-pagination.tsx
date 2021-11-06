import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames';

import style from './library-pagination.module.css';

const mockAuthors = ['Августеняк Екатерина', 'Александрин Егор', 'Борисов Борис', 'Фёдоров Фёдор'];

interface LibraryPaginationProps {
  letters: string[];
  top: string;
}

const LibraryPagination: FC<LibraryPaginationProps> = ({letters, top}) => {
  const [authors, setAuthors] = useState<Array<string>>(['']);
  const [letter, setLetter] = useState<string>('');

  //После появления API внутри useEffect при обновлении letter будет производиться
  //fetch запрос и стэйт authors будет обновляться данными с сервера.
  //Будет что-то вроде GET `https://graph.microsoft.com/v1.0/users?$filter=startswith(givenName, ${letter})`

  useEffect(() => {
    if (letter) {
      const currentAuthors = mockAuthors.filter((el) => el.startsWith(letter));
      setAuthors(currentAuthors);
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
          {authors.length > 0 && authors.map((el, index) => (
            <li key={index} className={style.author}><a href='#' className={style.link}>{el}</a></li>
          ))}
        </ul>
        <div className={style.chosenLetter}>
          <p className={style.bigLetter}>{letter}</p>
          <p className={style.authorsQuantity}>{letter && String(authors.length)}</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryPagination;
