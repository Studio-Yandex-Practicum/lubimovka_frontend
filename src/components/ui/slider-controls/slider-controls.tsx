import {FC, HTMLAttributes} from 'react';
import cn from 'classnames';
import styles from '../Button/Button.module.css';

interface ISliderControlsProps extends HTMLAttributes<HTMLButtonElement>{
  type: string;
  className?: string;
  onClick?: () => void;
}

export const SliderControls: FC<ISliderControlsProps> = (props) => {
  const { className } = props;
  return (
    <button className={cn(styles.sliderControl, className)}>
      <div className={cn(styles.firstCircle)} />
      <div className={cn(styles.secondCircle)}/>
    </button>
  );
};
