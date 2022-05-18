import { FC } from 'react';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './afisha-title.module.css';

interface IProps {
  festivalStatus: boolean;
  description: string;
  infoRegistration?: string | undefined;
  asteriskText?: string | undefined;
  afishaDates: Array<string>;
}

const cx = cn.bind(styles);

export const AfishaTitle: FC<IProps> = ({ festivalStatus, description, infoRegistration, asteriskText }) => {
  return (
    <section className={cx('section')}>
      <h1 className={cx('title')}>
        {festivalStatus ? 'Афиша фестиваля' : 'Афиша событий'}
      </h1>

      {festivalStatus
        && (
          <div className={cx('discussionInfo')}>
            <Icon glyph="asterisk"/>
            <p className={cx('discussion')}>
              {asteriskText}
            </p>
          </div>
        )
      }
      <div className={cx('entranceInfo')}>
        <p className={cx('info')}>
          {description}
        </p>

        {festivalStatus
          && (
            <p className={cx('info')}>
              {infoRegistration}
            </p>
          )
        }
      </div>
    </section>
  );
};
