import { FC } from 'react';
import styles from './slider-years.module.css';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';

const cx = classNames.bind(styles);

interface ISliderYearsProps {
  className: string;
  years: number[]
  currentYear: number;
  onClick: (year: number) => void;
}

export const SliderYears: FC<ISliderYearsProps> = ( { className, years, currentYear, onClick }) => {
//const [sliderRef] = useKeenSlider<HTMLDivElement>({
//  slidesPerView: 7.1,
//  mode: 'free-snap',
//  spacing: 150,
//  centered: true,
//});

  return(
    <div className={cx([styles.grid], className)}>
      {years.map((year) => {
        return (
          <h6 key={year}
            onClick={() => onClick(year)}
            className={cx([styles.slide],  {[styles.active]: currentYear === year})}
          >
            {year}
          </h6>
        );
      })}
    </div>
  );
//return(
//  <div ref={sliderRef} className={cx('keen-slider', [styles.slider], className)}>
//    {years.map((year) => {
//      return (
//        <h6 key={year}
//          onClick={() => onClick(year)}
//          className={cx([styles.slide], 'keen-slider__slide',  {[styles.active]: currentYear === year})}
//        >
//          {year}
//        </h6>
//      );
//    })}
//  </div>
//);
};
