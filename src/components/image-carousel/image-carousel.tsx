import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import { ArrowButton } from 'components/arrow-button';

import styles from './image-carousel.module.css';

const cx = classNames.bind(styles);

interface ImageCarouselProps {
  className?: string;
  initialSlideIndex?: number;
  children: React.ReactNode;
}

export const ImageCarousel = (props: ImageCarouselProps) => {
  const {
    className = '',
    initialSlideIndex = 0,
    children,
  } = props;

  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      spacing: 15,
    },
    initial: initialSlideIndex,
    created() {
      setLoaded(true);
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      return;
    }

    if (event.key === 'ArrowRight') {
      instanceRef.current?.next();

      return;
    }
  };

  return (
    <div
      className={cx('root', className)}
      onKeyDown={handleKeyDown}
    >
      <div ref={sliderRef} className={cx('keen-slider')}>
        {children}
      </div>
      {loaded && instanceRef.current && (
        <>
          <div className={cx('backward')}>
            <ArrowButton
              variant="backward"
              text="Предыдущий слайд"
              onClick={instanceRef.current?.prev}
            />
          </div>
          <div className={cx('forward')}>
            <ArrowButton
              variant="forward"
              text="Следующий слайд"
              onClick={instanceRef.current?.next}
            />
          </div>
        </>
      )}
    </div>
  );
};
