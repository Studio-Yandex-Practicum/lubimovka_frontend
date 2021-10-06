import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-header.module.css';

// interface IWhatWeDoHeaderProps {

// }

export const WhatWeDoHeader: FC = (): JSX.Element => {
  return (
    <section className={ cn(styles.header) }>
      <h1 className={ cn(styles.title) }>
        Фестиваль молодой драматургии Любимовка —
      </h1>
      <p className={ cn(styles.desc) }>
        это независимый некоммерческий коллективный проект российских драматургов.
        <p className={ cn(styles.text) }>
          В первые годы своего существования фестиваль проходил в подмосковной усадьбе Константина Сергеевича Станиславского,
          которое и дало название фестивалю.
        </p>
      </p>
    </section>
  );
};
