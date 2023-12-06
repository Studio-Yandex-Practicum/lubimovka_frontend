import cn from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { useSettings } from 'services/api/settings-adapter';

import styles from './what-we-do-contacts.module.css';

const cx = cn.bind(styles);

export const WhatWeDoContacts = () => {
  // TODO: отрефакторить компонент, передавать email в качестве пропса
  const { settings } = useSettings();

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
          <Button
            border='none'
            size="m"
            href={`mailto:${settings.emailAddresses.forDirectors}`}
            className={cx('desc', 'link')}
            animation='invert'
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            iconPosition="right"
          >
            напишите нам
          </Button>
          {' '}
          про себя.
        </div>
      </p>
    </section>
  );
};
