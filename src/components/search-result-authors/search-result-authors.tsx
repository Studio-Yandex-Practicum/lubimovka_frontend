import { FC } from 'react';

import { InfoLink } from '../ui/info-link';

import style from './search-result-authors.module.css';

interface ISearchResultAuthorsProps {
  authors: {
    title: string,
    data: Author[],
  }
}

interface Author {
  slug: string,
  name: string,
}

const SearchResultAuthors: FC<ISearchResultAuthorsProps> = ({ authors }) => {
  return (
    <li className={style.authors}>
      <span className={style.alphabetLetter}>
        {authors.title}
      </span>
      <ul className={style.authorsList}>
        {authors.data.map((author) => (
          <li className={style.authorsItem} key={author.slug}>
            <InfoLink
              href={`/${author.slug}`}
              label={author.name}
              size="l"
              className={style.authorsLink}
            >
              {authors.data}
            </InfoLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SearchResultAuthors;

