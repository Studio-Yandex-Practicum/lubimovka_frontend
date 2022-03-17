import { FC } from 'react';
import cn from 'classnames/bind';

import { FestivalDay, IFestivalDayProps } from 'components/afisha-page/festival-day';

import styles from './afisha-festival-days.module.css';

const cx = cn.bind(styles);

interface IFestivalDaysProps {
  data: IFestivalDayProps[];
}

export const FestivalDays: FC<IFestivalDaysProps> = (props) => {
  const { data } = props;
  return (
    <section className={cx('section')}>
      {data.map(day => (
        <FestivalDay
          key={day.id}
          {...day}
        />
      )
      )}
    </section>
  );
};
