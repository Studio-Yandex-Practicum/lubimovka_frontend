import { Children } from 'react';
import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

import { SliderButton } from 'components/ui/slider-button';
import { IconButton } from 'components/ui/icon-button';
import { Icon } from 'components/ui/icon';

import styles from './lightbox-image-slider.module.css';
const cx = classNames.bind(styles);

interface ILightboxImageSliderProps {
  className?: string;
  initialSlideIndex?: number;
  children: React.ReactNode;
  onClose?: () => void;
}

export const LightboxImageSlider = (props: ILightboxImageSliderProps): JSX.Element => {
  const {
    className = '',
    initialSlideIndex = 0,
    children,
    onClose
  } = props;

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    initial: initialSlideIndex,
  });

  return (
    <div className={cx(className, 'container')}>
      {slider && (
        <>
          <div className={cx('arrow', 'arrowLeft')}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel='Предыдущий слайд'
              direction='left'
              view='light'
              onClick={slider.prev}
            />
          </div>
          <div className={cx('arrow', 'arrowRight')}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel='Следующий слайд'
              direction='right'
              view='light'
              onClick={slider.next}
            />
          </div>
        </>
      )}
      <div ref={sliderRef} className={cx('keen-slider', 'slider')}>
        {Children.map(children, (slide) => (
          <div className={cx('keen-slider__slide', 'slide')}>
            {slide}
          </div>
        ))}
        {slider && (
          <div className={cx('close')}>
            <IconButton
              className={cx('closeButton')}
              ariaLabel='Закрыть лайтбокс'
              type='button'
              view='light'
              icon={<Icon glyph='cross' />}
              onClick={onClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};
