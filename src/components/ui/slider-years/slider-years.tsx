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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free-snap',
    spacing: 5,
    slidesPerView: 13,
    centered: true,
    breakpoints: {
      '(max-width: 1200px)': {
        slidesPerView: 7,
      },
      '(max-width: 728px)': {
        slidesPerView: 2.5,
        centered: false
      },
      '(max-width: 650px)': {
        slidesPerView: 2,
        centered: false
      },
      '(max-width: 520px)': {
        slidesPerView: 3,
        centered: false
      },
      '(max-width: 450px)': {
        slidesPerView: 3,
        centered: false
      },
    },
  });

  return(
    <div ref={sliderRef} className={cx('keen-slider', [styles.slider], className)}>
      {years.map((year) => {
        return (
          <h6 key={year}
            onClick={() => onClick(year)}
            className={cx('keen-slider__slide', [styles.slide], {[styles.active]: currentYear === year})}
          >
            {year}
          </h6>
        );
      })}
    </div>
  );
};
