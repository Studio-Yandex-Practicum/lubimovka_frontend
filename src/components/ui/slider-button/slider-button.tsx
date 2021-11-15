import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from '../icon';

import styles from './slider-button.module.css';

interface ISliderButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string;
  icon: 'arrow-left' | 'arrow-right' | 'cross';
  type?: 'navigation' | 'addon';
  view?: 'article' | 'popup';
}

const cx = classNames.bind(styles);

export const SliderButton: FC<ISliderButtonProps> = (props) => {
  const {
    className,
    icon,
    type = 'navigation',
    view = 'article',
    ...restProps
  } = props;

  const firstCircleStyles = cx(
    'circle',
    {
      left: icon === 'arrow-left',
    }
  );

  const secondCircleStyles = cx(
    'circle',
    {
      secondCircle: icon === 'arrow-right',
      secondCircleLeft: icon === 'arrow-left',
      left: icon === 'arrow-left',
    }
  );

  return(
    <button className={cx('sliderButton', [className], type, view)} type='button' {...restProps}>
      <div className={firstCircleStyles} />
      <div className={secondCircleStyles}/>
      <Icon glyph={icon} className={cx('icon')}/>
    </button>
  );
};


