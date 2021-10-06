import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-authors.module.css';

// interface IWhatWeDoAuthorsProps {

// }

const authorsList = [
  'Михаил Угаров', 'Алексей Слаповский', 'Ольга Михайлова', 'Елена Гремина',
  'Михаил Угаров', 'Алексей Слаповский', 'Ольга Михайлова', 'Елена Гремина',
  'Михаил Угаров', 'Алексей Слаповский', 'Ольга Михайлова', 'Елена Гремина',
  'Михаил Угаров', 'Алексей Слаповский', 'Ольга Михайлова', 'Елена Гремина',
];

export const WhatWeDoAuthors: FC = (): JSX.Element => {
  return (
    <section className={ cn(styles.authors) }>
      <h3 className={ cn(styles.title) } >
        В качестве начинающих авторов в своё время здесь представляли свои пьесы
      </h3>
      <ul className={ cn(styles.list) }>
        { authorsList.map((author, i) => {
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
