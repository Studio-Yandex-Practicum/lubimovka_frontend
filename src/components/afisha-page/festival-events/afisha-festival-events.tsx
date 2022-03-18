import { FC, useState } from 'react';
import cn from 'classnames/bind';

import { FestivalEvent } from 'components/afisha-page/festival-event';
import { AfishaEventListOutput, AfishaInfoOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { ImageSlider } from 'components/ui/image-slider';
import breakpoints from 'shared/breakpoints';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import styles from './afisha-festival-events.module.css';

interface IFestivalEvents extends PaginatedAfishaEventListOutputList {
  info: AfishaInfoOutput;
};

type Events = Record<string, AfishaEventListOutput[]>;

const cx = cn.bind(styles);

const groupByDay = (results: AfishaEventListOutput[] | undefined) => {
  if (!results) {
    return {};
  }

  return results.reduce((r: Events, i) => {
    const date = new Date(i.date_time).toLocaleDateString();
    r[date] = (r[date] || []);
    r[date].push(i);
    return r;
  }, {});
};

const getEvents = (events: Events) => {
  const res: JSX.Element[] = [];
  for (const key in events) {
    events[key].forEach((e, index) => {
      res.push(<FestivalEvent key={e.id} isFirst={index===0} {...e}/>);
    });
  }
  return res;
};

export const FestivalEvents: FC<IFestivalEvents> = (props) => {
  const { results, info } = props;
  
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);  
  // useEffect(() => {}, []);
  const [events] = useState(groupByDay(results));

  return (
    <section className={cx('section')}>
      {isMobile &&
        <ImageSlider className={cx('sliderContainer')} type="simple" showDots={false} loop={false}>
          {info.afisha_dates.map((i, index) => (
            <div key={index} className={cx('sliderItem')}>
              <div>{i}</div>
            </div>
          ))}
        </ImageSlider>}
      {getEvents(events)}
    </section>
  );
};
