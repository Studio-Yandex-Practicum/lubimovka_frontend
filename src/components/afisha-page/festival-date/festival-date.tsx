import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './festival-date.module.css';
import { formatDateTime } from 'shared/helpers/format-date-time';
import { ucFirst } from 'shared/helpers/uc-first';

interface IProps {
  dateTime: string;
  alignItems?: 'bottom' | 'center' | 'top'
};

const cx = cn.bind(styles);

export const FestivalDate: FC<IProps> = (props) => {
  const { dateTime, alignItems = 'center' } = props;

  const dateInfo = formatDateTime(dateTime, 'dMMMM').split(' ');

  return (
    <>
      <div className={cx('wrapper')}>
        <p className={cx('date', `alignItems${ucFirst(alignItems)}`)}>
          <span className={cx('number')}>
            {dateInfo[0]}
          </span>
          &nbsp;
          <span className={cx('month')}>
            {dateInfo[1]}
          </span>
        </p>
      </div>
    </>
  );
};
