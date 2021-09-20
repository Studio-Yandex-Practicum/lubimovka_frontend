import { FC, useState } from 'react';
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
              onClick={slider.prev}
            />
            <ArrowMock
              className={cn(styles.arrow, styles.arrowRight)}
              onClick={slider.next}
            />
          </>
        )}
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
