import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

import { SliderButton } from 'components/ui/slider-button';
import { SliderDots } from 'components/ui/slider-dots';
import { Url } from 'shared/types';

import styles from './image-slider.module.css';
const cx = classNames.bind(styles);

export type TImageItem = {
  image: Url;
  description?: string;
}

interface IImageSliderProps {
  className?: string;
  images: TImageItem[];
  showDots?: boolean;
  initialSlide?: number;
}

export const ImageSlider = (props: IImageSliderProps): JSX.Element => {
  const {
    className,
    images,
    showDots = true,
    initialSlide = 0,
  } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    initial: initialSlide,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className={cx(className)}>
      <div className={cx('container')}>
        {slider && (
          <>
            <div className={cx('arrow', 'arrowLeft')}>
              <SliderButton
                className={cx('arrowButton')}
                ariaLabel='Предыдущий слайд'
                direction='left'
                onClick={slider.prev}
              />
            </div>
            <div className={cx('arrow', 'arrowRight')}>
              <SliderButton
                className={cx('arrowButton')}
                ariaLabel='Следующий слайд'
                direction='right'
                onClick={slider.next}
              />
            </div>
          </>
        )}
        <div ref={sliderRef} className={cx('keen-slider', 'slider')}>
          {images.map((image, idx) => (
            <div key={idx} className={cx('keen-slider__slide', 'slide')}>
              <Image
                className={cx('image')}
                src={image.image}
                alt={image.description ?? ''}
                layout="fill"
              />
            </div>
          ))}
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
