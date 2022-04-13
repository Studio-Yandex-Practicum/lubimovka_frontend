import { forwardRef } from 'react';
import cn from 'classnames/bind';
import { isToday, isTomorrow } from 'date-fns';

import { EventCard } from 'components/event-card';

import { Role } from 'shared/types';
import { AfishaEvent } from 'shared/types';

import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints';
import { format } from 'shared/helpers/format-date';

import styles from './festival-event.module.css';

import { FestivalDate } from '../festival-date';

interface IProps extends AfishaEvent {
  isFirst: boolean;
};

const cx = cn.bind(styles);

const getCredits = (team: Role[], name: string) => team
  .filter(i => i.name.startsWith(name))
  .reduce((r, i) => r.concat(i.persons.join(', ')), '');

const getYesterday = (dateTime: string) => {
  const date = new Date(dateTime);
  date.setDate(date.getDate() - 1);
  return date;
};

export const FestivalEvent = forwardRef<HTMLElement, IProps>((props, ref) => {
  const { eventBody, isFirst, dateTime } = props;
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const registration = isToday(new Date(dateTime)) || (isTomorrow(new Date(dateTime))&& new Date().getHours() >= 12);

  return (
    <section key={props.id} className={cx('section')} ref={ref}>
      {isFirst && (
        <div className={cx('header')}>
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
            {registration && 'открыта регистрация'}
            {!registration && (
              <>
                {'Регистрация откроется'}
                <br/>
                {`${format('d MMMM', getYesterday(dateTime))} в 12:00`}
              </>
            )}
          </p>
        </div>
      )}
      <EventCard
        key={props.id}
        className={cx('event')}
        time={format('H:mm', new Date(dateTime))}
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
});

FestivalEvent.displayName = 'FestivalEvent';
