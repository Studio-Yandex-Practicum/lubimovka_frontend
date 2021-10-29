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
    blockOne: item
    blockTwo: item
    blockThree: item
  }
}

export const WhatWeDoDesc: FC<IWeDoAboutProps> = ({ data }): JSX.Element => {
  return (
    <section className={ cn(styles.descItem) }>
      <div className={ cn(styles.content, styles.contentReception) }>
        <div className={ cn(styles.container) }>
          <h2 className={ cn(styles.mainTitle) }>
            { data.blockOne.mainTitle }
          </h2>
          <h3 className={ cn(styles.title, styles.titleWidth) } >
            { data.blockOne.title }
          </h3>
          <p className={ cn(styles.desc) }>
            { data.blockOne.desc }
          </p>
        </div>
        <img src={ data.blockTwo.image } className={ cn(styles.imgReception) } />
      </div>

      <div className={ cn(styles.content, styles.contentSelected) }>
        <img src={ data.blockTwo.image } className={ cn(styles.imgSelected) } />
        <div className={ cn(styles.container, styles.containerSelected) }>
          <h3 className={ cn(styles.title) } >
            { data.blockTwo.title }
          </h3>
          <p className={ cn(styles.desc) }>
            { data.blockTwo.desc }
          </p>
        </div>
      </div>

      <div className={ cn(styles.container, styles.containerInvite) }>
        <h3 className={ cn(styles.title) } >
          { data.blockThree.title }
        </h3>
        <p className={ cn(styles.desc) }>
          { data.blockThree.desc }
        </p>
      </div>
    </section>
  );
};
