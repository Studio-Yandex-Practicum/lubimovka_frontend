import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-header.module.css';

interface IWhatWeDoHeaderProps {
  data: {
    id: number
    title: string
    desc: string[]
    image: string
  }
}

export const WhatWeDoHeader: FC<IWhatWeDoHeaderProps> = ({ data }): JSX.Element => {
  const { title, desc, image } = data;
  
  return (
    <section className={ cn(styles.header) }>
      <div className={ cn(styles.content) }>
        <h1 className={ cn(styles.title) }>
          { title }
        </h1>
        <p className={ cn(styles.desc) }>
          { desc[0] }
          <p className={ cn(styles.text) }>
            { desc[1] }
          </p>
        </p>
      </div>
      <div className={ cn(styles.container) }>
        <img src={ image } className={ cn(styles.img) } />
      </div>
    </section>
  );
};
