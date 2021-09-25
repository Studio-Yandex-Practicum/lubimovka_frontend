import {FC} from 'react';
import cn from 'classnames';
import classNames from 'classnames/bind';

import {Icon} from '../icon';

import styles from './slider-control.module.css';

interface ISliderControlProps {
  className?: string,
  direction: 'left' | 'right';
  disabled?: true | false;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

export const SliderControl: FC<ISliderControlProps> = (props) => {
  const {className, direction, disabled, onClick } = props;
  const left = direction === 'left';
  const arrowIcon = left ? 'arrow-left' : 'arrow-right';

  const sliderControlStyles = cx({
    sliderControl: true,
  });

  const firstCircleStyles = cx({
    circle: true,
    firstCircle: true,
    left: left,
  });

  const secondCircleStyles = cx({
    circle: true,
    secondCircle: !left,
    secondCircleLeft: left,
    left: left,
  });

  return(
    <button className={`${sliderControlStyles} ${className}`} type='button' onClick={onClick} disabled={disabled}>
      <div className={firstCircleStyles} />
      <div className={secondCircleStyles}/>
      <Icon glyph={arrowIcon} className={cn(styles.arrow)}/>
    </button>
  );
};


