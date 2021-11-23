import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames/bind';

import { IconButton } from 'components/ui/icon-button';
import { Icon } from 'components/ui/icon';

import styles from './slider-button.module.css';

interface ISliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  ariaLabel: string;
  direction?: 'right' | 'left';
  view?: 'ghost' | 'light';
}

const cx = classNames.bind(styles);

export const SliderButton: FC<ISliderButtonProps> = (props) => {
  const {
    className,
    ariaLabel,
    direction = 'right',
    view = 'ghost',
    ...restProps
  } = props;

  return(
    <IconButton
      className={cx(
        className,
        'button',
        direction
      )}
      ariaLabel={ariaLabel}
      type='button'
      view={view}
      icon={<Icon glyph={direction === 'right' ? 'arrow-right' : 'arrow-left'} />}
      {...restProps}
    />
  );
};


