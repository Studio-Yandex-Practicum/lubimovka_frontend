import { FC } from 'react';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './afisha-title.module.css';

const cx = cn.bind(styles);

interface IAfishaTitle {
  festival: boolean,
  title: string,
  discussion: string,
  entrance: string,
  registration: string,
}

export const AfishaTitle: FC<IAfishaTitle> = ({ festival, title, discussion, entrance, registration }) => {
  return (
    <section className={cx('section')}>
      <h1 className={cx('title')}>
        {title}
      </h1>

      {festival &&
        <div className={cx('discussionInfo')}>
          <Icon glyph="asterisk"/>
          <p className={cx('discussion')}>
            {discussion}
          </p>
        </div>
      }

      <div className={cx('entranceInfo')}>
        <p className={cx('info')}>
          {entrance}
        </p>

        {festival &&
          <p className={cx('info')}>{registration}</p>
        }
      </div>
    </section>
  );
};
