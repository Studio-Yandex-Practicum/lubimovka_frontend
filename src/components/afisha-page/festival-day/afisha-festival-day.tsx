import { FC } from 'react';
import cn from 'classnames/bind';

import { EventCard } from 'components/event-card';
import { AfishaEventListOutput } from 'api-typings';
import { TypeA7fEnum } from 'api-typings/models/TypeA7fEnum';
import { Event_Type_objects } from 'api-typings/models/Event_Type_objects';

import styles from './afisha-festival-day.module.css';

const cx = cn.bind(styles);

const getDateInfo = (date_time: string) => {
  const date = new Date(date_time);
   
  const parts = date.toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' }).split(' ');

  const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();
  const isTomorrow = date.toLocaleDateString() === new Date(24 * 3600 * 1000).toLocaleDateString();
  
  return {
    day: Number(parts[0]),
    month: parts[1],
    time: `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`,
    registration: isToday ?? (isTomorrow && new Date().getHours() >= 12),
  };
};

export interface IFestivalDayProps {
  readonly id: number;
  type: TypeA7fEnum;
  readonly event_body: Event_Type_objects;
  date_time: string;
  paid?: boolean | undefined;
  url: string;
  place: string;
}

export const FestivalDay: FC<AfishaEventListOutput> = (props) => {
  const { date_time, event_body } = props;
  const dateInfo = getDateInfo(date_time);

  const registration = cx({
    opened: dateInfo.registration,
    closed: !dateInfo.registration,
  });

  return (
    <section className={cx('section')}>
      <div className={cx('wrapper')}>
        <p className={cx('date')}>
          <span className={cx('span')}>
            {dateInfo.day}
          </span>&nbsp;{dateInfo.month}
        </p>
        <p className={registration}>
          {dateInfo.registration ? 'открыта регистрация' : `Регистрация откроется ${dateInfo.day - 1} ${dateInfo.month} в 12:00`}
        </p>
      </div>
      {/* {plays.map(play => */}
      <EventCard
        key={props.id}
        className={cx('event')}
        time={dateInfo.time}
        location={props.place}
        title={event_body.project_title}
        image="" //???
        description={event_body.description}
        registrationUrl={dateInfo.registration ? props.url : undefined}
        playwright={event_body.team
          .filter(i => i.name.startsWith('Драматург'))
          // @ts-ignore - не правильный тип сбэка
          .reduce((r, i) => r.concat(i.persons.join(', ')), '')}
        director={event_body.team
          .filter(i => i.name.startsWith('Режиссер'))
          // @ts-ignore - не правильный тип сбэка
          .reduce((r, i) => r.concat(i.persons.join(', ')), '')}
      />
      {/* )} */}
    </section>
  );
};
