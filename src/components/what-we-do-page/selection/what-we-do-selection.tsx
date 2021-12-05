import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-selection.module.css';

interface poster {
  id: number
  ampersand: string
  title: string
  desc: string
}

interface Item {
  id: number
  title: string
  desc: string[]
}

interface IWhatWeDoSelectionProps {
  data: {
    id: number
    title: string
    items: Item[]
    poster: poster
  }
}

export const WhatWeDoSelection: FC<IWhatWeDoSelectionProps> = ({ data }): JSX.Element => {
  const { title, items, poster } = data;

  return (
    <section className={cn(styles.selection)}>
      <h2 className={cn(styles.mainTitle)}>
        {title}
      </h2>
      <ul className={cn(styles.list)}>
        {items.map((data, i) => (
          <li className={cn(styles.item)} key={i}>
            <p className={cn(styles.number)}>
              {i + 1}
            </p>
            <h3 className={cn(styles.title)}>
              {data.title}
            </h3>
            {
              data.desc.map((text, i) => (
                <p className={cn(styles.desc)} key={i}>
                  {text}
                </p>
              ))}
          </li>
        ))}
      </ul>
      <div className={cn(styles.poster)}>
        <h3 className={cn(styles.posterTitle)}>
          <span className={cn(styles.ampersand)}>
            {poster.ampersand}
          </span>
          {poster.title}
        </h3>
        <p className={cn(styles.posterDesc)}>
          {poster.desc}
        </p>
      </div>
    </section>
  );
};
