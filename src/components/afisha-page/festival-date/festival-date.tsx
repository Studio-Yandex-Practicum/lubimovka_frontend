import { FC } from 'react';
import cn from 'classnames/bind';

import { format } from 'shared/helpers/format-date';
import { ucFirst } from 'shared/helpers/uc-first';

import styles from './festival-date.module.css';

interface IProps {
  dateTime: string;
  alignItems?: 'bottom' | 'center' | 'top'
};

const cx = cn.bind(styles);

export const FestivalDate: FC<IProps> = (props) => {
  const { dateTime, alignItems = 'center' } = props;

  const date = format('d', new Date(dateTime));
  const month = format('MMMM', new Date(dateTime));

  return (
    <div className={cx('wrapper')}>
      <time className={cx('date', `alignItems${ucFirst(alignItems)}`)}>
        <span className={cx('number')}>
          {date}
        </span>
        &nbsp;
        <span className={cx('month')}>
          {month}
        </span>
      </time>
    </div>
  );
};
