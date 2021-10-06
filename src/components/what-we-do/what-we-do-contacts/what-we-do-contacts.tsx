import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-contacts.module.css';

// interface IWhatWeDoContactsProps {

// }

export const WhatWeDoContacts: FC = (): JSX.Element => {
  return (
    <section className={ cn(styles.contacts) }>
      <h3 className={ cn(styles.title) }>
        Конкурса для режиссеров читок на фестивале нет
      </h3>
      <p className={ cn(styles.desc) }>
        <span className={ cn(styles.asterisk) }>
          *
        </span>
        Команда Любимовки самостоятельно привлекает режиссеров для работы. Если вам хочется стать режиссером одной из читок, 
        напишите нам про себя.
      </p>
    </section>
  );
};
