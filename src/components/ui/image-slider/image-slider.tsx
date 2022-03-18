import { useState, Children, useMemo } from 'react';
import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

import { SliderButton } from 'components/ui/slider-button';
import { SliderDots } from 'components/ui/slider-dots';

import styles from './image-slider.module.css';

const cx = classNames.bind(styles);

interface IImageSliderProps {
  className?: string;
  showDots?: boolean;
  initialSlide?: number;
  children: React.ReactNode;
  type?: 'image' | 'simple';
  loop?: boolean;
}

// Думаю можно переименовать в Slider
export const ImageSlider = (props: IImageSliderProps): JSX.Element => {
  const {
    className,
    showDots = true,
    loop = true,
    initialSlide = 0,
    children,
    type = 'image'
  } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPrevBtn, setshowPrevBtn] = useState(loop || initialSlide !== 0);
  const [showNextBtn, setshowNextBtn] = useState(loop || Children.count(children) - 1 !== initialSlide);

  const media = useMemo(() => (type === 'image' ? 
    {
      'container': 'container_media',
      'arrow': 'arrow_media',
      'slider': 'slider_media',
      'dots': 'dots_media'
    } 
    : {}) as Record<string, string>
  , [type]);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop,
    spacing: 15,
    initial: initialSlide,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
      if (!loop) {
        setshowPrevBtn(s.details().relativeSlide !== 0);
        setshowNextBtn(Children.count(children) - 1 !== s.details().relativeSlide);
      }
    },
  });

  return (
    <div className={cx(className)}>
      <div className={cx('container', media['container'])}>
        {slider && showPrevBtn && (
          <div className={cx('arrow', 'arrowLeft', media['arrow'])}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel="Предыдущий слайд"
              direction="left"
              onClick={slider.prev}
            />
          </div>)}

        {slider && showNextBtn && (    
          <div className={cx('arrow', 'arrowRight', media['arrow'])}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel="Следующий слайд"
              direction="right"
              onClick={slider.next}
            />
          </div>)}
        <div ref={sliderRef} className={cx('keen-slider', 'slider', media['slider'])}>
          {Children.map(children, (slide) => (
            <div className={cx('keen-slider__slide', type === 'image' ? 'slide' : '')}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      {slider && showDots && (
        <SliderDots
          className={cx('dots', media['dots'])}
          count={slider.details().size}
          currentSlide={currentSlide}
          onClick={(idx) => slider.moveToSlideRelative(idx)}
        />
      )}
    </div>
  );
};
