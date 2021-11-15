import { FC, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { SliderButton } from '../slider-button';
import { SliderDots } from '../slider-dots';
import { Icon } from '../icon';
import { Url } from 'shared/types';


import styles from './feedback-popup.module.css';
const cx = classNames.bind(styles);

export type PersonCardData = {
  id: number;
  person: {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    city: string;
    email: string;
    image: Url;
  };
  year: number;
  review_title: string;
  review_text: string;
}

interface IFeedbackPopupProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>,
  isOpen?: boolean;
  cards: Array<PersonCardData>;
  currentYear: number;
  openedSlide: number
}

export const FeedbackPopup: FC<IFeedbackPopupProps> = (props) => {
  const { isOpen, cards, currentYear, openedSlide, onClose } = props;

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const [currentSlide, setCurrentSlide] = useState(openedSlide);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    slider?.moveToSlide(openedSlide);
  }, [isOpen]);

  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    slider?.refresh();
  }, [screenWidth, currentYear]);

  return (
    <div ref={sliderRef} className={cx('keen-slider', 'slider', { [styles.isOpen]: isOpen })}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={cx('keen-slider__slide', 'slide')}
        >
          <div className={cx('container')}>
            {slider &&
            <>
              <SliderButton
                icon='arrow-left'
                className={cx('arrow', 'arrowLeft')}
                onClick={slider.prev}
              />
              {Number(screenWidth) < 729 &&
              <button className={cx('buttonClose')} onClick={onClose}>
                <Icon
                  className={cx('cross')}
                  glyph={'cross'}
                />
              </button>}
              <img
                className={cx('image')}
                src={card.person.image}
              />
              <h2 className={cx('name')}>{`${card.person.first_name} ${card.person.last_name}`}</h2>
              {Number(screenWidth) < 729 &&
              <SliderDots
                className={cx('dots')}
                count={slider.details().size}
                currentSlide={currentSlide}
                onClick={(idx) => slider.moveToSlideRelative(idx)}
              />}
              <p className={cx('title')}>{card.review_title}</p>
              <p className={cx('text')}>{card.review_text}</p>
              {Number(screenWidth) > 728 &&
              <SliderDots
                className={cx('dots')}
                count={slider.details().size}
                currentSlide={currentSlide}
                onClick={(idx) => slider.moveToSlideRelative(idx)}
              />}
              <SliderButton
                icon='arrow-right'
                className={cx('arrow', 'arrowRight')}
                onClick={slider.next}
              />
            </>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

