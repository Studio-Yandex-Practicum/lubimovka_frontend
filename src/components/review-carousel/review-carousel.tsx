import { FC, Children, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { SliderButton } from 'components/ui/slider-button';
import { SliderDots } from 'components/ui/slider-dots';

import type KeenSlider from 'keen-slider/react';

import styles from './review-carousel.module.css';

interface IReviewCarousel {
  title: string,
  mode: 'single' | 'multiple',
}

const cx = classNames.bind(styles);

export const ReviewCarousel: FC<IReviewCarousel> = (props) => {
  const {
    title,
    mode,
    children,
  } = props;

  const slidesPerView = {
    multiple: 3,
    single: 2,
  }[mode];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [carouselRef, carousel] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView,
    spacing: 30,
    centered: mode === 'single',
    slideChanged(carousel) {
      setCurrentSlideIndex(carousel.details().relativeSlide);
    },
    breakpoints: {
      '(max-width: 728px)': {
        slidesPerView: 1,
      }
    }
  });

  const handleDotClick = (dotIndex: number) => {
    const { slidesPerView } = carousel.details();
    const slideIndex = mode === 'single'
      ? dotIndex
      : (slidesPerView * (dotIndex + 1)) - slidesPerView + 1;
    carousel.moveToSlideRelative(slideIndex);
  };

  const handleNextClick = () => {
    const { slidesPerView, absoluteSlide } = carousel.details();
    mode === 'single'
      ? carousel.next()
      : carousel.moveToSlide(absoluteSlide + slidesPerView);
  };

  const handlePrevClick = () => {
    const { slidesPerView, absoluteSlide } = carousel.details();
    mode === 'single'
      ? carousel.prev()
      : carousel.moveToSlide(absoluteSlide - slidesPerView);
  };

  const lastSlideReached = carousel && (mode === 'single'
    ? currentSlideIndex === carousel.details().size - 1
    : currentSlideIndex === carousel.details().size - carousel.details().slidesPerView);

  return (
    <div className={cx(mode)}>
      <div className={cx('header')}>
        <h2 className={cx('title')}>
          {title}
        </h2>
        {carousel && (
          <>
            <SliderDots
              className={cx('dots')}
              count={mode === 'single' ? carousel.details().size : getSlidesGroups(carousel).length}
              currentSlide={mode === 'single' ? currentSlideIndex : getSlideGroupIndex(carousel, currentSlideIndex)}
              onClick={handleDotClick}
            />
            <div className={cx('arrows')}>
              <SliderButton
                ariaLabel="Предыдущий отзыв"
                direction="left"
                className={cx('arrow', 'arrowLeft')}
                onClick={handlePrevClick}
                disabled={currentSlideIndex === 0}
              />
              <SliderButton
                ariaLabel="Следующий отзыв"
                direction="right"
                className={cx('arrow', 'arrowRight')}
                onClick={handleNextClick}
                disabled={lastSlideReached}
              />
            </div>
          </>
        )}
      </div>
      <div
        ref={carouselRef}
        className={cx('keen-slider', 'slider')}
      >
        {Children.map(children, (slide, index) => (
          <div className={cx('slide', { active: index === currentSlideIndex }, 'keen-slider__slide')}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

function getSlidesGroups(carouselInstance: KeenSlider) {
  const { size, slidesPerView } = carouselInstance.details();

  return Array.from(Array(size).keys()).filter((x, index) => index % slidesPerView === 0);
}

function getSlideGroupIndex(carouselInstance: KeenSlider, slideIndex: number) {
  const { slidesPerView } = carouselInstance.details();

  return Math.ceil(slideIndex / slidesPerView);
}
