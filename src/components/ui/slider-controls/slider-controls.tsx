import {FC, HTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './slider-controls.module.css';
import {Icon} from '../icon';

interface ISliderControlsProps extends HTMLAttributes<HTMLButtonElement>{
  type: string;
  className?: string;
  onClick?: () => void;
}

export const SliderControls: FC<ISliderControlsProps> = (props) => {
  const { className } = props;
  return (props.className === 'left' ?
    <button className={cn(styles.sliderControl, className)} type='button'>
      <div className={cn(styles.circle, styles.firstCircle, styles.left)} />
      <div className={cn(styles.circle, styles.secondCircleLeft, styles.left)}/>
      <Icon glyph={'arrow-left'} className={cn(styles.arrow)}/>
    </button>
    : <button className={cn(styles.sliderControl, className)} type='button'>
      <div className={cn(styles.circle, styles.firstCircle)} />
      <div className={cn(styles.circle, styles.secondCircle)}/>
      <Icon glyph={'arrow-right'} className={cn(styles.arrow)}/>
    </button>
  );
};
