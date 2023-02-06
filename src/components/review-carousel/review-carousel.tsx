import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

import { ArrowButton } from 'components/arrow-button';
import { SliderDots } from 'components/ui/slider-dots';
import breakpoints from 'shared/breakpoints';

import styles from './review-carousel.module.css';

interface IReviewCarousel {
  title: string,
  mode: 'single' | 'multiple',
}

const cx = classNames.bind(styles);

export const ReviewCarousel: React.FC<IReviewCarousel> = (props) => {
  const {
    title,
    mode,
    children,
  } = props;

  const slidesPerView = {
    multiple: 3,
    single: 2,
  }[mode];

  const [loaded, setLoaded] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: slidesPerView,
      spacing: 30,
      origin: mode === 'single' ? 'center' : 'auto'
    },
    created() {
      setLoaded(true);
    },
    slideChanged(s) {
      setCurrentSlideIndex(s.track.details.rel);
    },
    breakpoints: {
      [`(max-width: ${breakpoints['tablet-portrait']})`]: {
        slides: { perView: 1 },
      }
    }
  });

  const lastSlideReached = !!instanceRef.current && (mode === 'single'
    ? currentSlideIndex === instanceRef.current.slides.length - 1
    : currentSlideIndex === instanceRef.current.slides.length - slidesPerView);

  return (
    <div className={cx(mode)}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>
          {title}
        </h2>
        {loaded && instanceRef.current && (
          <>
            <SliderDots
              className={cx('dots')}
              count={instanceRef.current?.track.details.maxIdx + 1}
              currentSlide={instanceRef.current?.track.details.abs}
              onClick={instanceRef.current?.moveToIdx}
            />
            <div className={cx('arrows')}>
              <ArrowButton
                text="Предыдущий отзыв"
                variant="backward"
                size="s"
                className={cx('arrow')}
                onClick={instanceRef.current?.prev}
                disabled={currentSlideIndex === 0}
              />
              <ArrowButton
                variant="forward"
                size="s"
                text="Следующий отзыв"
                className={cx('arrow')}
                onClick={instanceRef.current?.next}
                disabled={lastSlideReached}
              />
            </div>
          </>
        )}
      </div>
      <div
        ref={sliderRef}
        className={cx('keen-slider', 'slider')}
      >
        {React.Children.map(children, (slide, index) => (
          <div className={cx('slide', { active: index === currentSlideIndex }, 'keen-slider__slide')}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
