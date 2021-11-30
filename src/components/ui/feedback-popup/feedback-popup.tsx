import { FC, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import classNames from 'classnames/bind';

import { SliderButton } from '../slider-button';
import { SliderDots } from '../slider-dots';
import { IconButton } from 'components/ui/icon-button';
import { Icon } from '../icon';
import { Volunteers } from 'api-typings';

import styles from './feedback-popup.module.css';

const cx = classNames.bind(styles);

interface IFeedbackPopupProps {
  onClose: () => void,
  isOpen: boolean;
  cards: Array<Volunteers>;
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
                className={cx('arrow', 'arrowLeft')}
                ariaLabel='Предыдущий отзыв'
                direction='left'
                onClick={slider.prev}
              />
              {Number(screenWidth) < 729 &&
              <div className={cx('close')}>
                <IconButton
                  className={cx('closeButton')}
                  ariaLabel='Закрыть лайтбокс'
                  type='button'
                  view='light'
                  icon={<Icon glyph='cross'/>}
                  onClick={onClose}
                />
              </div>}
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
              {card.review_title === '' ? '' : <p className={cx('title')}>{card.review_title}</p>}
              <p className={cx('text')}>{card.review_text}</p>
              {Number(screenWidth) > 728 &&
              <SliderDots
                className={cx('dots')}
                count={slider.details().size}
                currentSlide={currentSlide}
                onClick={(idx) => slider.moveToSlideRelative(idx)}
              />}
              <SliderButton
                className={cx('arrow', 'arrowRight')}
                ariaLabel='Следующий отзыв'
                direction='right'
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
