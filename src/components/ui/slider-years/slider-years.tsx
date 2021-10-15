import { FC } from 'react';
import styles from './slider-years.module.css';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
const cx = classNames.bind(styles);

interface ISliderYearsProps {
  className: string;
  years: number[];
  currentYear: number;
  onClick: (index: number) => void;
}

export const SliderYears: FC<ISliderYearsProps> = ( { className, years, currentYear, onClick }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 13,
    mode: 'free-snap',
    spacing: 40,
    centered: true,
    loop: false,
  });

  return(
    <div ref={sliderRef} className={cx('container', 'keen-slider', 'slider', className)}>
      {years.map((year) => {
        return (
          <h6 key={year}
            onClick={() => onClick(year)}
            className={cx('year', 'keen-slider__slide', 'slide', {[styles.active]: currentYear === year})}
          >
            {year}
          </h6>
        );
      })}
    </div>
  );
};
