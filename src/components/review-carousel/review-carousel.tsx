import { FC, Children, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { SliderButton } from 'components/ui/slider-button';
import { SliderDots } from 'components/ui/slider-dots';

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
              count={carousel.details().size}
              currentSlide={currentSlideIndex}
              onClick={(idx) => carousel.moveToSlideRelative(idx)}
            />
            <div className={cx('arrows')}>
              <SliderButton
                ariaLabel="Предыдущий отзыв"
                direction="left"
                className={cx('arrow', 'arrowLeft')}
                onClick={carousel.prev}
                disabled={currentSlideIndex === 0}
              />
              <SliderButton
                ariaLabel="Следующий отзыв"
                direction="right"
                className={cx('arrow', 'arrowRight')}
                onClick={carousel.next}
                disabled={currentSlideIndex === carousel.details().size - 1}
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
