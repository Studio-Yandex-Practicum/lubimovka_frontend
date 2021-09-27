import {ButtonHTMLAttributes, FC} from 'react';
import cn from 'classnames';
import classNames from 'classnames/bind';

import {Icon, IIconProps} from '../icon';

import styles from './slider-button.module.css';

interface ISliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  direction: 'left' | 'right';
}

const cx = classNames.bind(styles);

export const SliderButton: FC<ISliderButtonProps> = (props) => {
  const {className, direction, ...restProps } = props;
  const arrowIcon = {
    left: 'arrow-left',
    right: 'arrow-right',
  }[direction] as IIconProps['glyph'];

  const firstCircleStyles = cx({
    circle: true,
    firstCircle: true,
    left: direction === 'left',
  });

  const secondCircleStyles = cx({
    circle: true,
    secondCircle: direction === 'right',
    secondCircleLeft: direction === 'left',
    left: direction === 'left',
  });

  return(
    <button className={cn(styles.sliderButton, className)} type='button' {...restProps}>
      <div className={firstCircleStyles} />
      <div className={secondCircleStyles}/>
      <Icon glyph={arrowIcon} className={cn(styles.arrow)}/>
    </button>
  );
};


