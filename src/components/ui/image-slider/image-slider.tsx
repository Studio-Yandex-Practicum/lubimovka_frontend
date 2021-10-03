import { FC, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

import { ArrowMock } from './mocks/arrow-mock';
import { DotsMock } from './mocks/dots-mock';

import styles from './image-slider.module.css';

export type TImageItem = {
  imageURI: string;
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
    <div className={cn(styles.navigationWrapper, className)}>
      {slider && (
        <>
          <ArrowMock
            className={cn(styles.arrow, styles.arrowLeft)}
            onClick={slider.prev}
          />
          <ArrowMock
            className={cn(styles.arrow, styles.arrowRight)}
            onClick={slider.next}
          />
        </>
      )}
      <div ref={sliderRef} className={cn('keen-slider', styles.slider)}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className={cn('keen-slider__slide', styles.slide)}
          >
            <img
              className={styles.image}
              src={image.imageURI}
              alt={image.caption}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {slider && <DotsMock
        className={styles.dots}
        count={slider.details().size}
        currentSlide={currentSlide}
        onClick={(idx) => slider.moveToSlideRelative(idx)}
      />}
    </div>
  );
};
