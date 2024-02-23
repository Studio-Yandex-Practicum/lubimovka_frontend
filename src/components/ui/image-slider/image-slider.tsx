import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

import { ArrowButton } from 'components/arrow-button';
import { SliderDots } from 'components/ui/slider-dots';

import styles from './image-slider.module.css';

const cx = classNames.bind(styles);

interface ImageSliderProps {
  className?: string
  showDots?: boolean
  initialSlide?: number
}

export const ImageSlider: React.FC<ImageSliderProps> = (props) => {
  const {
    className,
    showDots = true,
    initialSlide = 0,
    children
  } = props;

  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      spacing: 15,
    },
    initial: initialSlide,
    created() {
      setLoaded(true);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className={cx(className)}>
      <div className={cx('container')}>
        <div ref={sliderRef} className={cx('keen-slider', 'slider')}>
          {React.Children.map(children, (slide) => (
            <div className={cx('keen-slider__slide', 'slide')}>
              {slide}
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <div className={cx('arrow', 'arrowLeft')}>
              <ArrowButton
                className={cx('arrowButton')}
                variant="backward"
                size="s"
                text="Предыдущий слайд"
                onClick={instanceRef.current.prev}
              />
            </div>
            <div className={cx('arrow', 'arrowRight')}>
              <ArrowButton
                className={cx('arrowButton')}
                variant="forward"
                size="s"
                text="Следующий слайд"
                onClick={instanceRef.current.next}
              />
            </div>
          </>
        )}
      </div>
      {loaded && instanceRef.current && showDots && (
        <SliderDots
          className={cx('dots')}
          count={instanceRef.current?.slides.length}
          currentSlide={currentSlide}
          onClick={instanceRef.current?.moveToIdx}
        />
      )}
    </div>
  );
};
