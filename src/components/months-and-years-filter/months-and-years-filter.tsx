import React from 'react';

import cn from 'classnames/bind';
import styles from './months-and-years-filter.module.css';
import { Droplist } from '../ui/droplist';
import { convertMonthToNumber } from './utlis/convertMonthToNumber';
import { createMonthList, createYearList } from './utlis/createList';

const cx = cn.bind(styles);

interface IFilter {
  className?: string;
  filterCallBack: (month?: number, year?: number) => void
}

const MonthsAndYearFilter: React.FC<IFilter> = (props) => {
  const {
    className,
    filterCallBack,
  } = props;

  // const currentMonth:number = new Date().getMonth();
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
      />
      <Droplist
        data={createYearList()}
        type='radio'
        defaultValue={'Год'}
        cb={([year]) => callBackForYear(year)}
        className={cx('droplistTypelistYears')}
      />
    </div>
  );
};

export default MonthsAndYearFilter;
