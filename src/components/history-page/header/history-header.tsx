import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';

import { SliderYears } from 'components/ui/slider-years';

import style from './history-header.module.css';

interface IHistoryHeaderProps {
  data: {
    years: number[]
  },
  selectYear: (year: number ) => void
}

export const HistoryHeader: FC<IHistoryHeaderProps> = ({ data, selectYear }) => {
  const { years } = data;
  const [currentYear, setCurrentYear] = useState(years[0]);
  const changeYearHandler = useCallback((year:number)=> {
    setCurrentYear(year);
    selectYear(year);
  }, []);
  return (
    <section className={style.section}>
      <SliderYears
        className={cn(style.yearsContainer)}
        years={years}
        onClick={changeYearHandler}
        currentYear={currentYear}
      />
    </section>
  );
};

