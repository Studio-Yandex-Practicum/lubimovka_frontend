import { FC } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';
import { formatDate } from 'shared/helpers/formatDateServerData';

import styles from './main-title.module.css';

const cx = classNames.bind(styles);

export interface IMainTitle {
  afisha_today: boolean;
  description: string;
}

export const MainTitle: FC<IMainTitle> = ({ afisha_today, description }) => {
  return (
    <section className={cx('section')}>
      <div className={cx('wrapper', {
        'width': afisha_today
      })}>
        <h1 className={cx('title')}>
          {afisha_today ? `Афиша на сегодня, ${formatDate(new Date().toString())}` : 'Афиша событий'}
        </h1>
        <div className={cx('buttonContainer')}>
          <Button
            label="ПОЛНАЯ АФИША"
            isLink
            href="/afisha/events"
            size="s"
            border="bottomLeft"
            iconPlace="left"
            className={cx('icon')}
            icon="arrow-right"
            width="100%"
          />
        </div>
        <p className={cx('desc', {
          'margin': afisha_today
        })}>
          {description}
        </p>
      </div>
    </section>
  );
};
