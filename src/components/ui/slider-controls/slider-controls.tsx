import {FC, HTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './slider-controls.module.css';

interface ISliderControlsProps extends HTMLAttributes<HTMLButtonElement>{
  type: string;
  className?: string;
  onClick?: () => void;
}

export const SliderControls: FC<ISliderControlsProps> = (props) => {
  const { className } = props;
  return (
    <button className={cn(styles.sliderControl, className)} type='button'>
      <div className={cn(styles.firstCircle)} />
      <div className={cn(styles.secondCircle)}/>
    </button>
  );
};
