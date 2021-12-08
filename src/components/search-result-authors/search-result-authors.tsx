import { FC } from 'react';

import style from './search-result-authors.module.css';

interface SearchResultAuthorsProps {
  authors: {
    title: string,
    data: string[],
  }
}

const SearchResultAuthors: FC<SearchResultAuthorsProps> = ({ authors }) => {
  return (
    <li className={style.authors}>
      <span className={style.alphabeetLetter}>{authors.title}</span>
      <ul className={style.authorsList}>
        {authors.data.map((author, i) => (
          <li className={style.authorsItem} key={i}>
            <a href="?" className={style.authorsLink}>{author}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SearchResultAuthors;
