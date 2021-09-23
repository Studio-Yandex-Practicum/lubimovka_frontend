import {FC} from 'react';
import cn from 'classnames';
import styles from './slider-controls.module.css';
import {Icon} from '../icon';

interface ISliderControlsProps {
  type?: string;
  className?: string;
  onClick?: () => void;
}

interface ISliderProps {
  disabled?: boolean;
  onClick?: (index: number) => void;
}

export const SliderControls: FC<ISliderControlsProps> = () => {
  return(<>
    <LeftSlider/>
    <RightSlider/>
  </>);
};

export const LeftSlider: FC<ISliderProps> = (props) => {
  const { onClick, disabled } = props;
  return (
    <button className={cn(styles.sliderControl, disabled ? styles.disabled : '')} type='button' onClick={() => onClick}>
      <div className={cn(styles.circle, styles.firstCircle, styles.left)} />
      <div className={cn(styles.circle, styles.secondCircleLeft, styles.left)}/>
      <Icon glyph={'arrow-left'} className={cn(styles.arrow)}/>
    </button>
  );
};

export const RightSlider: FC<ISliderProps> = (props) => {
  const { onClick, disabled } = props;
  return (
    <button className={cn(styles.sliderControl, disabled ? styles.disabled : '')} type='button' onClick={() => onClick}>
      <div className={cn(styles.circle, styles.firstCircle)} />
      <div className={cn(styles.circle, styles.secondCircle)}/>
      <Icon glyph={'arrow-right'} className={cn(styles.arrow)}/>
    </button>
  );
};
