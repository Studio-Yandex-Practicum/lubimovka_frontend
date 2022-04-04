import { useState, Children, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

import { SliderButton } from 'components/ui/slider-button';
import { SliderDots } from 'components/ui/slider-dots';
import { ucFirst } from 'shared/helpers/uc-first';

import styles from './image-slider.module.css';

const cx = classNames.bind(styles);

interface IImageSliderProps {
  className?: string;
  showDots?: boolean;
  initialSlide?: number;
  children: React.ReactNode;
  type?: 'image' | 'simple';
  loop?: boolean;
  handlerChange?: (index: number) => void;
}

// Думаю можно переименовать в Slider
export const ImageSlider = (props: IImageSliderProps): JSX.Element => {
  const {
    className,
    showDots = true,
    loop = true,
    initialSlide = 0,
    children,
    type = 'image',
    handlerChange
  } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPrevBtn, setShowPrevBtn] = useState(loop || initialSlide !== 0);
  const [showNextBtn, setShowNextBtn] = useState(loop || Children.count(children) - 1 !== initialSlide);

  useEffect(() => {
    if (handlerChange) {
      handlerChange(currentSlide);
    }
  }, [currentSlide]);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop,
    spacing: 15,
    initial: initialSlide,
    slideChanged(s) {
      const { relativeSlide } = s.details();
      setCurrentSlide(relativeSlide);
      if (!loop) {
        setShowPrevBtn(relativeSlide !== 0);
        setShowNextBtn(Children.count(children) - 1 !== relativeSlide);
      }
    },
  });

  return (
    <div className={cx(className)}>
      <div className={cx('container')}>
        {slider && showPrevBtn && (
          <div className={cx('arrow', 'arrowLeft', `arrow${ucFirst(type)}`)}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel="Предыдущий слайд"
              direction="left"
              onClick={slider.prev}
            />
          </div>
        )}

        {slider && showNextBtn && (
          <div className={cx('arrow', 'arrowRight', `arrow${ucFirst(type)}`)}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel="Следующий слайд"
              direction="right"
              onClick={slider.next}
            />
          </div>
        )}
        <div className={cx(`containerSlides${ucFirst(type)}`)}>
          <div ref={sliderRef} className={cx('keen-slider', 'slider')}>
            {Children.map(children, (slide) => (
              <div className={cx('keen-slider__slide', type === 'image' ? 'slide' : '')}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>
      {slider && showDots && (
        <SliderDots
          className={cx('dots')}
          count={slider.details().size}
          currentSlide={currentSlide}
          onClick={(idx) => slider.moveToSlideRelative(idx)}
        />
      )}
    </div>
  );
};
