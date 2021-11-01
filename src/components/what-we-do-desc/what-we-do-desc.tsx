import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-desc.module.css';

interface item {
  id: number
  mainTitle?: string
  title: string
  desc: string
  image?: string
}

interface IWeDoAboutProps {
  data: {
    block1: item
    block2: item
    block3: item
  }
}

export const WhatWeDoDesc: FC<IWeDoAboutProps> = ({ data }): JSX.Element => {
  return (
    <section className={ cn(styles.descItem) }>

      <div className={ cn(styles.content, styles.contentReception) }>
        <div className={ cn(styles.container) }>
          <h2 className={ cn(styles.mainTitle) }>
            { data.block1.mainTitle }
          </h2>

          <h3 className={ cn(styles.title, styles.titleWidth) } >
            { data.block1.title }
          </h3>
          <p className={ cn(styles.desc) }>
            { data.block1.desc }
          </p>

        </div>
        <img src={ data.block1.image } className={ cn(styles.imgReception) } />
      </div>

      <div className={ cn(styles.content, styles.contentSelected) }>
        <img src={ data.block2.image } className={ cn(styles.imgSelected) } />
        <div className={ cn(styles.container, styles.containerSelected) }>
          <h3 className={ cn(styles.title) } >
            { data.block2.title }
          </h3>
          <p className={ cn(styles.desc) }>
            { data.block2.desc }
          </p>
        </div>
      </div>

      <div className={ cn(styles.container, styles.containerInvite) }>
        <h3 className={ cn(styles.title) } >
          { data.block3.title }
        </h3>
        <p className={ cn(styles.desc) }>
          { data.block3.desc }
        </p>
      </div>

    </section>
  );
};
