import { FC } from 'react';
import cn from 'classnames';

import style from './library-pagination.module.css';

const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

const authors = ['Августеняк Екатерина', 'Александрин Егор'];

const LibraryPagination: FC = () => {
  return (
    <div className={style.container}>
      <form className={style.letters}>
        {letters.map((el, index) => (
          <div key={index} className={style.letter}>
            <label htmlFor={el} className={style.label}>{el}</label>
            <input type="radio" name='letter' id={el} value={el} className={style.inputRadio}/>
          </div>
        ))}
      </form>
      <div className={style.authors}>
        <ul className={style.authorsList}>
          {authors.map((el, index) => (
            <li key={index} className={style.author}>{el}</li>
          ))}
        </ul>
        <div className={style.chosenLetter}>
          <p className={style.bigLetter}>А</p>
          <p className={style.authorsQuantity}>16</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryPagination;
