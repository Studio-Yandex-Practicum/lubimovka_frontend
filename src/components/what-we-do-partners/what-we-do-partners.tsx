import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-partners.module.css';

import { Partners } from 'components/partners';

export const WhatWeDoPartners: FC = (): JSX.Element => {
  return (
    <section className={ cn(styles.partners) }>
      <Partners />
    </section>
  );
};
