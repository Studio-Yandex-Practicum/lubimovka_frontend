import React from 'react';
import cn from 'classnames/bind';

import { Droplist, IDroplistPublic } from '../ui/droplist';
import { convertMonthToNumber } from './utils/convertMonthToNumber';
import { createMonthList, createYearList } from './utils/createList';

import styles from './months-and-years-filter.module.css';

const cx = cn.bind(styles);

interface IFilter {
  className?: string;
  filterCallBack: (month?: number, year?: number) => void
}

export const MonthsAndYearsFilter: React.FC<IFilter> = (props) => {
  const {
    className,
    filterCallBack,
  } = props;

  const droplistRef = React.useRef(null) as React.RefObject<IDroplistPublic>;

  const currentMonth:number = new Date().getMonth();
  const currentYear:number = new Date().getFullYear();

  const [month, setMonth] = React.useState<number>();
  const [year, setYear] = React.useState<number>();

  function callBackForMonth(selectMonth: string) {
    if(selectMonth !== 'Месяц' && selectMonth !== undefined){
      setMonth(convertMonthToNumber(selectMonth));
      filterCallBack(month, year);
    }
  }

  function callBackForYear(selectYear: string) {
    if(selectYear !== 'Год' && selectYear !== undefined){
      setYear(Number(selectYear));
      if(month &&  month > currentMonth && Number(selectYear) === currentYear){
        droplistRef.current?.deleteAll();
        setMonth(undefined);
      }
      filterCallBack(month, year);
    }
  }

  return (
    <div className={cx('drop', className)}>
      <Droplist
        data={createMonthList(year || currentYear)}
        type='radio'
        defaultValue={'Месяц'}
        cb={([month]) => callBackForMonth(month)}
        className={cx('droplistTypelistMonths')}
        ref={droplistRef}
      />
      <Droplist
        data={createYearList()}
        type='radio'
        defaultValue={'Год'}
        cb={([year]) => callBackForYear(year)}
        className={cx('droplistTypelistYears')}
      />
      <span className={cx('error', 'errorMonth', { errorVisible:month === undefined && year })}>
        Выберите месяц
      </span>
      <span className={cx('error', 'errorYear', { errorVisible:month !== undefined && !year })}>
          Выберите год
      </span>
    </div>

  );
};
