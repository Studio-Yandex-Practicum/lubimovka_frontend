import { FC, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { SliderButton } from '../slider-button';
import { SliderDots } from '../slider-dots';
import { Url } from 'shared/types';

import styles from './image-slider.module.css';
const cx = classNames.bind(styles);

export type TImageItem = {
  image: Url;
  caption: string;
}

interface IImageSliderProps {
  className?: string;
  images: TImageItem[];
}

export const ImageSlider: FC<IImageSliderProps> = (props) => {
  const { className, images } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={cx('imageSlider', className)}>
      {slider && (
        <>
          <SliderButton
            direction='left'
            className={cx('arrow', 'arrowLeft')}
            onClick={slider.prev}
          />
          <SliderButton
            direction='right'
            className={cx('arrow', 'arrowRight')}
            onClick={slider.next}
          />
        </>
      )}
      <div ref={sliderRef} className={cx('keen-slider', 'slider')}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className={cx('keen-slider__slide', 'slide')}
          >
            <img
              className={cx('image')}
              src={image.image}
              alt={image.caption}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {slider && <SliderDots
        className={cx('dots')}
        count={slider.details().size}
        currentSlide={currentSlide}
        onClick={(idx) => slider.moveToSlideRelative(idx)}
      />}
    </div>
  );
};
