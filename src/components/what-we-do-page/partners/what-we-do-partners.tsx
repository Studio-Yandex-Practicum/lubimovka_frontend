import cn from 'classnames';

import { Partners } from 'components/partners';

import styles from './what-we-do-partners.module.css';

export const WhatWeDoPartners = (): JSX.Element => {
  return (
    <section className={ cn(styles.partnersContainer) }>
      <Partners className={styles.partners} />
    </section>
  );
};
