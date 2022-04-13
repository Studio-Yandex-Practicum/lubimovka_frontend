import { useState, Children, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useKeenSlider } from 'keen-slider/react';

import { SliderButton } from 'components/ui/slider-button';

import styles from './afisha-pagination.module.css';

const cx = classNames.bind(styles);

interface IProps {
  className?: string;
  initial?: number;
  children: React.ReactNode;
  onChange?: (index: number) => void;
}

export const AfishaPagination = (props: IProps): JSX.Element => {
  const {
    className,
    initial = 0,
    children,
    onChange
  } = props;

  const [current, setCurrent] = useState(0);
  const [showPrevBtn, setShowPrevBtn] = useState(initial !== 0);
  const [showNextBtn, setShowNextBtn] = useState(Children.count(children) - 1 !== initial);

  useEffect(() => {
    if (onChange) {
      onChange(current);
    }
  }, [current]);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    spacing: 15,
    initial,
    slideChanged(s) {
      const { relativeSlide } = s.details();
      setCurrent(relativeSlide);
      setShowPrevBtn(relativeSlide !== 0);
      setShowNextBtn(Children.count(children) - 1 !== relativeSlide);
    },
  });

  return (
    <div className={cx(className)}>
      <div className={cx('container')}>
        {slider && showPrevBtn && (
          <div className={cx('arrow', 'arrowLeft')}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel="Предыдущая страница"
              direction="left"
              onClick={slider.prev}
            />
          </div>
        )}

        {slider && showNextBtn && (
          <div className={cx('arrow', 'arrowRight')}>
            <SliderButton
              className={cx('arrowButton')}
              ariaLabel="Следующая страница"
              direction="right"
              onClick={slider.next}
            />
          </div>
        )}
        <div className={cx('containerSlides')}>
          <div ref={sliderRef} className={cx('keen-slider', 'slider')}>
            {Children.map(children, (child) => (
              <div className={cx('keen-slider__slide')}>
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
