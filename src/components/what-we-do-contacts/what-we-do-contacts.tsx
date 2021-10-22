import { FC } from 'react';
import cn from 'classnames';

import { Icon } from 'components/ui/icon';

import styles from './what-we-do-contacts.module.css';

interface IWhatWeDoContactsProps {
  data: {
    id: number
    title: string
    description1: string
    description2: string
    director: {
      id: number
      text: string
      contacts: string
    }
  }
}

export const WhatWeDoContacts: FC<IWhatWeDoContactsProps> = ({ data }): JSX.Element => {
  const { title, description1, description2, director } = data;

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
        { description1 + ' ' }
        <a href='#'>{ director.text }</a>
        { ' ' + description2 }
      </p>
    </section>
  );
};
