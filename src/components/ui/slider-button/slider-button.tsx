import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from '../icon';

import styles from './slider-button.module.css';

interface ISliderButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string;
  icon: 'arrow-left' | 'arrow-right' | 'cross';
  type?: 'navigation' | 'addon';
  view?: 'article' | 'popup';
  direction?: 'right' | 'left';
}

const cx = classNames.bind(styles);

export const SliderButton: FC<ISliderButtonProps> = (props) => {
  const {
    className,
    icon,
    type = 'navigation',
    view = 'article',
    direction = 'right',
    ...restProps
  } = props;

  return(
    <button
      className={cx(
        'button',
        [className],
        type,
        view,
        direction
      )}
      type='button'
      {...restProps}
    >
      <Icon className={cx('icon')} glyph={icon} />
    </button>
  );
};


