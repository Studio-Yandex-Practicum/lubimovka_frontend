import {ButtonHTMLAttributes, FC} from 'react';
import cn from 'classnames';
import classNames from 'classnames/bind';

import {Icon} from '../icon';

import styles from './slider-button.module.css';

interface ISliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  direction: 'left' | 'right';
}

const cx = classNames.bind(styles);

export const SliderButton: FC<ISliderButtonProps> = (props) => {
  const {className, direction, ...restProps } = props;
  const left = direction === 'left';
  const arrowIcon = left ? 'arrow-left' : 'arrow-right';

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
    <button className={cn(styles.sliderButton, className)} type='button' {...restProps}>
      <div className={firstCircleStyles} />
      <div className={secondCircleStyles}/>
      <Icon glyph={arrowIcon} className={cn(styles.arrow)}/>
    </button>
  );
};


