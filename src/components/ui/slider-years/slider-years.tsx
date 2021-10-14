import { FC } from 'react';
import styles from './slider-years.module.css';
import cn from 'classnames';

interface ISliderYearsProps {
  className: string;
  years: number[];
  currentYear: number;
  onClick: (index: number) => void;
}

export const SliderYears: FC<ISliderYearsProps> = ( { className, years, currentYear, onClick }) => {

  return(
    <div className={cn(styles.container, className)}>
      {years.map((year) => {
        const isActive = () => {
          if (year === currentYear) {
            return true;
          }
          return false;
        };

        console.log(isActive());
        return (
          <h6 key={year}
            className={cn(styles.year, {[styles.active]: isActive()})}
            onClick={() => onClick(year)}
          >
            {year}
          </h6>
        );
      })}
    </div>
  );
};
