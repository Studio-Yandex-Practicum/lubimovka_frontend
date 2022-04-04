import { FC, useCallback, useMemo, useRef } from 'react';
import cn from 'classnames/bind';

import { ImageSlider } from 'components/ui/image-slider';
import { FestivalDate } from '../festival-date';
import { useAfisha } from '../afisha-provider';

import styles from './festival-events-mobile.module.css';
import { FestivalEvent } from '../festival-event';
import { Loader } from 'components/ui/loader';

const cx = cn.bind(styles);

export const FestivalEventsMobile: FC = () => {
  const { selectInfo, selectEvents, putDay, selectDay, isLoading } = useAfisha();
  const eventsRef = useRef<HTMLElement>(null);

  const { afishaDates } = selectInfo();
  const day = selectDay();

  const onChange = useCallback((index: number) => {
    putDay(index);
  }, [putDay]);

  return (
    <>
      <section className={cx('sliderContainer')} ref={eventsRef}>
        <ImageSlider
          type="simple"
          showDots={false}
          loop={false}
          initialSlide={useMemo(() => day, [])}
          handlerChange={onChange}
        >
          {afishaDates.map((date) => (
            <div key={`slider-dates-${date}`} className={cx('sliderItem')}>
              <FestivalDate dateTime={date}/>
            </div>
          ))}
        </ImageSlider>
      </section>
      <section className={cx('section')}>
        {isLoading() &&<Loader/>}
        {selectEvents(afishaDates[day]).map((e, index) => <FestivalEvent key={e.id} isFirst={index===0} {...e}/>)}
      </section>
    </>
  );
};
