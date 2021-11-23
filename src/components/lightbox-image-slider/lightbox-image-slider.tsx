import Image from 'next/image';
import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

import { SliderButton } from 'components/ui/slider-button';
import { Url } from 'shared/types';

import styles from './lightbox-image-slider.module.css';
const cx = classNames.bind(styles);

export type TImageItem = {
  image: Url;
  description?: string;
}

interface ILightboxImageSliderProps {
  images: TImageItem[];
  initialSlideIndex?: number;
  onClose?: () => void;
}

export const LightboxImageSlider = (props: ILightboxImageSliderProps): JSX.Element => {
  const {
    images,
    initialSlideIndex,
    onClose
  } = props;

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    initial: initialSlideIndex,
  });

  return (
    <div className={cx('container')}>
      {slider && (
        <>
          <div className={cx('arrow', 'arrowLeft')}>
            <SliderButton
              icon="arrow-left"
              type='navigation'
              view='popup'
              onClick={slider.prev}
            />
          </div>
          <div className={cx('arrow', 'arrowRight')}>
            <SliderButton
              icon="arrow-right"
              type='navigation'
              view='popup'
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
        {slider && (
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
  );
};
