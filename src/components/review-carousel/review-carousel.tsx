import { FC, Children, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

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
  const [carouselRef] = useKeenSlider<HTMLDivElement>({
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
          { title }
        </h2>
      </div>
      <div
        ref={carouselRef}
        className="keen-slider"
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
