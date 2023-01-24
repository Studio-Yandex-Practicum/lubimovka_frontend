import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

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

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    initial: initialSlideIndex,
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      slider.prev();

      return;
    }

    if (event.key === 'ArrowRight') {
      slider.next();

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
      {slider && (
        <>
          <div className={cx('backward')}>
            <ArrowButton
              variant="backward"
              text="Предыдущий слайд"
              onClick={slider.prev}
            />
          </div>
          <div className={cx('forward')}>
            <ArrowButton
              variant="forward"
              text="Следующий слайд"
              onClick={slider.next}
            />
          </div>
        </>
      )}
    </div>
  );
};
