import React, { FC, useCallback, useState } from 'react';
import cn from 'classnames';

import { SliderYears } from 'components/ui/slider-years';

import style from './history-header.module.css';

interface TextItemData {
  id: number,
  year: number
}
interface IHistoryHeaderProps {
  data: {
    headerContent: TextItemData[]
  },
  selectYear: (year: number | undefined) => void
}

export const HistoryHeader: FC<IHistoryHeaderProps> = ({ data, selectYear }) => {
  const { headerContent } = data;

  const years: number[] =[];
  headerContent.map((item) => {
    years.push(Number(item.year));
  });
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

