import { FC } from 'react';
import cn from 'classnames/bind';

import { EventCard } from 'components/event-card';
import { Role } from 'shared/types';
import { FestivalDate } from '../festival-date';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints';

import styles from './festival-event.module.css';
import { AfishaEvent } from 'shared/types';
import { formatDateTime } from 'shared/helpers/format-date-time';
import { parseDate } from '../utils/parseDate';

interface IProps extends AfishaEvent {
  isFirst: boolean;
};

const cx = cn.bind(styles);

const getCredits = (team: Role[], name: string) => team
  .filter(i => i.name.startsWith(name))
  .reduce((r, i) => r.concat(i.persons.join(', ')), '');

const isReg = (dateTime: string) => {
  const data = parseDate(dateTime);
  return data.isToday || (data.isTomorrow && new Date().getHours() >= 12);
};

const getYesterday = (dateTime: string) => {
  const date = new Date(dateTime);
  date.setDate(date.getDate() - 1);
  return date;
};

export const FestivalEvent: FC<IProps> = (props) => {
  const { eventBody, isFirst, dateTime } = props;
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const registration = isReg(dateTime);

  return (
    <section className={cx('section')}>
      {isFirst && (
        <div className={cx('wrapper')}>
          {!isMobile && (
            <>
              <FestivalDate dateTime={dateTime} alignItems="bottom"/>
            </>
          )}
          <p className={cx({
            opened: registration,
            closed: !registration,
          })}
          >
            {registration ? 'открыта регистрация' : `Регистрация откроется ${formatDateTime(getYesterday(dateTime), 'dMMMM')} в 12:00`}
          </p>
        </div>
      )}
      <EventCard
        key={props.id}
        className={cx('event')}
        time={formatDateTime(dateTime, 'mH')}
        location={props.place}
        title={eventBody.projectTitle}
        image={'image' in eventBody ? eventBody.image : undefined}
        description={eventBody.description}
        registrationUrl={registration ? props.url : undefined}
        playwright={getCredits(eventBody.team, 'Драматург')}
        director={getCredits(eventBody.team, 'Режиссер')}
      />
    </section>
  );
};
