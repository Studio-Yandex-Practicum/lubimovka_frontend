import { FC, useCallback, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

import { ArrowMock } from './mocks/arrow-mock';
import { DotsMock } from './mocks/dots-mock';

import styles from './image-slider.module.css';
import 'keen-slider/keen-slider.min.css';

export type TImageItem = {
  image: string;
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

  const onPrev = useCallback(() => slider.prev(), [slider]);
  const onNext = useCallback(() => slider.next(), [slider]);
  const onDotClick = useCallback((idx) => slider.moveToSlideRelative(idx), [slider]);

  const getImagesCount = useCallback(() => slider.details().size, [slider]);

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.navigationWrapper}>
        <div ref={sliderRef} className='keen-slider'>
          {images.map((card, idx) => (
            <div
              key={idx}
              className={cn('keen-slider__slide', styles.slide)}
            >
              <img
                className={styles.image}
                src={card.image}
                alt={card.caption}
                draggable={false}
              />
            </div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowMock
              className={cn(styles.arrow, styles.arrowLeft)}
              onClick={onPrev}
            />
            <ArrowMock
              className={cn(styles.arrow, styles.arrowRight)}
              onClick={onNext}
            />
          </>
        )}
      </div>
      {slider && <DotsMock
        className={styles.dots}
        count={getImagesCount()}
        currentSlide={currentSlide}
        onClick={onDotClick}
      />}
    </div>
  );
};
