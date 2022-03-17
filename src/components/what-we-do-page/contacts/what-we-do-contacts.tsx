import React from 'react';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './what-we-do-contacts.module.css';

const cx = cn.bind(styles);

export const WhatWeDoContacts = (): JSX.Element => (
  <section className={cx('contacts')}>
    <h3 className={cx('title')}>
      Конкурса для режиссеров читок на фестивале нет
    </h3>
    <p className={cx('desc')}>
      <span className={cx('asterisk')}>
        {<Icon
          glyph="asterisk"
          fill="black"
          className={styles.asterisk}
        />}
      </span>
      <div>
        Команда Любимовки самостоятельно привлекает режиссеров для работы.
        Если вам хочется стать режиссером одной из читок,
        {' '}
        <a href="mailto:festival@lubimovka.ru" className={cx('link')}>
          напишите нам
        </a>
        {' '}
        про себя.
      </div>
    </p>
  </section>
);
