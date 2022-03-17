import { FC } from 'react';
import cn from 'classnames/bind';

import { EventCard } from 'components/event-card';
import { AfishaEventListOutput, Role } from 'api-typings';

import styles from './afisha-festival-event.module.css';

interface IFestivalDayProps extends AfishaEventListOutput{
  isFirst: boolean;
};

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
    registration: isToday || (isTomorrow && new Date().getHours() >= 12),
  };
};

const getCredits = (team: Role[], name: string) => team
  .filter(i => i.name.startsWith(name))
  .reduce((r, i) => r.concat(i.persons.join(', ')), '');

export const FestivalEvent: FC<IFestivalDayProps> = (props) => {
  const { date_time, event_body, isFirst } = props;
  const dateInfo = getDateInfo(date_time);

  const registration = cx({
    opened: dateInfo.registration,
    closed: !dateInfo.registration,
  });

  return (
    <section className={cx('section')}>
      {isFirst && <div className={cx('wrapper')}>
        <p className={cx('date')}>
          <span className={cx('span')}>
            {dateInfo.day}
          </span>&nbsp;{dateInfo.month}
        </p>
        <p className={registration}>
          {dateInfo.registration ? 'открыта регистрация' : `Регистрация откроется ${dateInfo.day - 1} ${dateInfo.month} в 12:00`}
        </p>
      </div>}
      <EventCard
        key={props.id}
        className={cx('event')}
        time={dateInfo.time}
        location={props.place}
        title={event_body.project_title}
        image={'image' in event_body ? event_body.image : undefined}
        description={event_body.description}
        registrationUrl={dateInfo.registration ? props.url : undefined}
        playwright={getCredits(event_body.team, 'Драматург')}
        director={getCredits(event_body.team, 'Режиссер')}
      />
    </section>
  );
};
