import { FC } from 'react';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './afisha-title.module.css';

interface IAfishaTitle {
  festival_status: boolean;
  description: string;
  info_registration?: string | undefined;
  asterisk_text?: string | undefined;
  afisha_dates: Array<string>;
}

const cx = cn.bind(styles);

export const AfishaTitle: FC<IAfishaTitle> = ({ festival_status, description, info_registration, asterisk_text }) => {
  return (
    <section className={cx('section')}>
      <h1 className={cx('title')}>
        {festival_status ? 'Афиша фестиваля' : 'Афиша событий'}
      </h1>

      {festival_status
        && (
          <div className={cx('discussionInfo')}>
            <Icon glyph="asterisk"/>
            <p className={cx('discussion')}>
              {asterisk_text}
            </p>
          </div>
        )
      }
      <div className={cx('entranceInfo')}>
        <p className={cx('info')}>
          {description}
        </p>

        {festival_status
          && (
            <p className={cx('info')}>
              {info_registration}
            </p>
          )
        }
      </div>
    </section>
  );
};
