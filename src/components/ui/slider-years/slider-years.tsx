import { FC } from 'react';
import styles from './slider-years.module.css';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

interface ISliderYearsProps {
  className: string;
  years: number[];
  currentYear: number;
  onClick: (index: number) => void;
}

export const SliderYears: FC<ISliderYearsProps> = ( { className, years, currentYear, onClick }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 2,
    mode: 'free-snap',
    spacing: 15,
    centered: true,
    loop: false,
  });

  return(
    <div ref={sliderRef} className={cn(styles.container, className)}>
      {years.map((year) => {
        return (
          <h6 key={year}
            onClick={() => onClick(year)}
            className={cn(styles.year, {[styles.active]: currentYear === year})}
          >
            {year}
          </h6>
        );
      })}
    </div>
  );
};
