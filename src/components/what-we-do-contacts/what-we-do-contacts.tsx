import { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../ui/icon';

import styles from './what-we-do-contacts.module.css';

interface IWhatWeDoContactsProps {
  data: {
    id: number
    title: string
    desc: string
  }
}

export const WhatWeDoContacts: FC<IWhatWeDoContactsProps> = ({ data }): JSX.Element => {
  const { title, desc } = data;

  return (
    <section className={ cn(styles.contacts) }>
      <h3 className={ cn(styles.title) }>
        { title }
      </h3>
      <p className={ cn(styles.desc) }>
        <span className={ cn(styles.asterisk) }>
          { <Icon glyph='asterisk' fill='black'
            className={ styles.asterisk } /> }
        </span>
        { desc }
      </p>
    </section>
  );
};
