import { FC, useCallback, useState } from 'react';
import cn from 'classnames/bind';

import { FestivalEvent } from 'components/afisha-page/festival-event';
import { ImageSlider } from 'components/ui/image-slider';
import { FestivalDate } from '../festival-date';
import { Events, useFestival } from '../festival-provider';

import styles from './festival-events-mobile.module.css';

const cx = cn.bind(styles);

const renderEvents = (events: Events) => {
  const res: JSX.Element[] = [];
  for (const key in events) {
    events[key].forEach((e, index) => {
      res.push(<FestivalEvent key={e.id} isFirst={index===0} {...e}/>);
    });
  }
  return res;
};

export const FestivalEventsMobile: FC = () => {
  const festival = useFestival();
  const [events, setEvents] = useState<Events>({});

  const { getEvents, getInfo } = festival;
  const { afisha_dates: dates } = getInfo();

  const handlerChange = useCallback((index: number) => {
    getEvents([dates[index]]).then(r => setEvents(r || []));
  }, [dates, getEvents]);

  return (
    <>
      <section className={cx('sliderContainer')}>
        <ImageSlider
          type="simple"
          showDots={false}
          loop={false}
          handlerChange={handlerChange}
        >
          {dates.map((date, index) => (
            <div key={index} className={cx('sliderItem')}>
              <FestivalDate date={date}/>
            </div>
          ))}
        </ImageSlider>
      </section>
      <section className={cx('section')}>
        {renderEvents(events)}
      </section>
    </>
  );
};
