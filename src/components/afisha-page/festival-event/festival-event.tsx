import { FC } from 'react';
import cn from 'classnames/bind';

import { EventCard } from 'components/event-card';
import { AfishaEventListOutput, Role } from 'api-typings';
import { FestivalDate } from '../festival-date';
import { ParseDate } from '../utils/getDateInfo';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints';
import { useFestival } from '../festival-provider/festival-provider';

import styles from './festival-event.module.css';

interface IFestivalDayProps extends AfishaEventListOutput{
  isFirst: boolean;
};

const cx = cn.bind(styles);

const getCredits = (team: Role[], name: string) => team
  .filter(i => i.name.startsWith(name))
  .reduce((r, i) => r.concat(i.persons.join(', ')), '');

const isReg = (dateInfo: ParseDate) => dateInfo.isToday || (dateInfo.isTomorrow && new Date().getHours() >= 12);

export const FestivalEvent: FC<IFestivalDayProps> = (props) => {
  const { event_body, isFirst, date_time } = props;
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);  

  const festival = useFestival();
  const { getDateInfo } = festival;
  const dateInfo = getDateInfo(date_time);
  const registration = isReg(dateInfo);

  return (
    <section className={cx('section')}>
      {isFirst && <div className={cx('wrapper')}>
        {!isMobile && <><FestivalDate date={date_time}/></>}
        <p className={cx({
          opened: registration,
          closed: !registration,
        })}
        >
          {registration ? 'открыта регистрация' : `Регистрация откроется ${dateInfo.day - 1} ${dateInfo.monthWord} в 12:00`}
        </p>
      </div>}
      <EventCard
        key={props.id}
        className={cx('event')}
        time={`${new Date(date_time).getHours()}:${('0' + new Date(date_time).getMinutes()).slice(-2)}`}
        location={props.place}
        title={event_body.project_title}
        image={'image' in event_body ? event_body.image : undefined}
        description={event_body.description}
        registrationUrl={registration ? props.url : undefined}
        playwright={getCredits(event_body.team, 'Драматург')}
        director={getCredits(event_body.team, 'Режиссер')}
      />
    </section>
  );
};
