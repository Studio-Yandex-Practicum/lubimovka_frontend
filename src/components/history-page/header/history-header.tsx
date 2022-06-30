import React, { FC } from 'react';
import cn from 'classnames';

import { SliderYears } from 'components/ui/slider-years';

import style from './history-header.module.css';

interface IHistoryHeaderProps {
  data: {
    years: number[]
  },
  selectYear: (year: number ) => void
  currentYear: number
}

export const HistoryHeader: FC<IHistoryHeaderProps> = ({ data, selectYear, currentYear }) => {
  const { years } = data;
  return (
    <section className={style.section}>
      <SliderYears
        className={cn(style.yearsContainer)}
        years={years}
        onClick={selectYear}
        currentYear={currentYear}
      />
    </section>
  );
};

