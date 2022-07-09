import React, { FC } from 'react';
import cn from 'classnames';

import { SliderYears } from 'components/ui/slider-years';

import style from './history-header.module.css';

interface HistoryHeaderProps {
  years: number[]
  selectYear: (year: number ) => void
  currentYear: number
}

export const HistoryHeader: FC<HistoryHeaderProps> = ({ years, selectYear, currentYear }) => {
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

