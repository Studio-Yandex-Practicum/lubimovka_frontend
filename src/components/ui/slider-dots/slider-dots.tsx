import {FC} from 'react';
import cn from 'classnames';

import styles from './slider-dots.module.css';

interface ISliderDotsProps {
  className: string;
  count: number;
  currentSlide: number;
  onClick: (index: number) => void;
}

export const SliderDots: FC<ISliderDotsProps> = ({className, count, currentSlide, onClick}) => {
  return (
    <div className={cn(styles.dots, className)}>
      {[...Array.from(Array(count).keys())].map((index) => {
        return (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={cn(styles.dot, {[styles.dotActive]: currentSlide === index})}
          />
        );
      })}
    </div>
  );
};
