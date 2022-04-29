import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';
import { usePersistentData } from 'providers/persistent-data-provider';

import styles from './what-we-do-contacts.module.css';

const cx = cn.bind(styles);

export const WhatWeDoContacts = () => {
  // TODO: отрефакторить компонент, передавать email в качестве пропса
  const { settings } = usePersistentData();

  if (!settings?.emailAddresses.forDirectors) {
    return null;
  }

  return (
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
          <InfoLink
            isOutsideLink
            label="напишите нам"
            icon="arrow-right"
            iconPlace="right"
            size="m"
            className={cx('desc', 'link')}
            href={`mailto:${settings.emailAddresses.forDirectors}`}
          />
          {' '}
          про себя.
        </div>
      </p>
    </section>
  );
};
