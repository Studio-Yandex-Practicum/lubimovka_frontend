import { FC } from 'react';
import cn from 'classnames/bind';

import { useFestival } from '../festival-provider/festival-provider';

import styles from './festival-date.module.css';

interface IFestivalDateProps {
  date: string;
};

const cx = cn.bind(styles);

export const FestivalDate: FC<IFestivalDateProps> = (props) => {
  const { date } = props;

  const festival = useFestival();
  const { getDateInfo } = festival;

  const dateInfo = getDateInfo(date);

  return (
    <>
      <div className={cx('wrapper')}>
        <p className={cx('date')}>
          <span className={cx('span')}>
            {dateInfo.day}
          </span>&nbsp;{dateInfo.monthWord}
        </p>
      </div>
    </>
  );
};
