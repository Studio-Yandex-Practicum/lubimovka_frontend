import { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { SliderButton } from '../slider-button';
import { SliderDots } from '../slider-dots';
import { Url } from 'shared/types';

import articleImageSliderStyles from './type/article-image-slider.module.css';
import popupImageSliderStyles from './type/popup-image-slider.module.css';

const styles = {
  'article': articleImageSliderStyles,
  'popup': popupImageSliderStyles,
};

export type TImageItem = {
  image: Url;
  caption?: string;
}

interface IImageSliderProps {
  className?: string;
  images: TImageItem[];
  type: 'article' | 'popup';
  showDots?: boolean;
  initialSlide?: number;
  onClose?: () => void;
}

export const ImageSlider = (props: IImageSliderProps): JSX.Element => {
  const {
    className,
    images,
    type = 'article',
    showDots = true,
    initialSlide = 0,
    onClose,
  } = props;

  const cx = classNames.bind(styles[type]);

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
    <div className={cx('imageSlider', className)}>
      <div className={cx('container')}>
        {slider && (
          <>
            <div className={cx('arrow', 'arrowLeft')}>
              <SliderButton
                icon="arrow-left"
                type='navigation'
                view={type === 'popup' ? 'popup' : 'article'}
                onClick={slider.prev}
              />
            </div>
            <div className={cx('arrow', 'arrowRight')}>
              <SliderButton
                icon="arrow-right"
                type='navigation'
                view={type === 'popup' ? 'popup' : 'article'}
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
                alt={image.caption ?? ''}
                layout="fill"
              />
            </div>
          ))}
          {slider && type === 'popup' && (
            <div className={cx('closeButton')}>
              <SliderButton
                icon='cross'
                type='addon'
                view='popup'
                onClick={onClose}
              />
            </div>
          )}
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
