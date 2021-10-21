import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-authors.module.css';

interface IWhatWeDoAuthorsProps {
  data: {
    id: number
    title: string
    authors: string[]
  }
}

export const WhatWeDoAuthors: FC<IWhatWeDoAuthorsProps> = ({ data }): JSX.Element => {
  const { title, authors } = data;

  return (
    <section className={ cn(styles.authors) }>
      <h2 className={ cn(styles.title) } >
        { title }
      </h2>
      <ul className={ cn(styles.list) }>
        { authors.map((author, i) => {
          return (
            <li className={ cn(styles.item) } key={ i }>
              { author }
            </li>
          );
        })}
      </ul>
    </section>
  );
};
