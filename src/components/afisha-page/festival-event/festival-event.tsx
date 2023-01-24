import { forwardRef } from 'react';
import cn from 'classnames/bind';
import { isToday, isTomorrow } from 'date-fns';

import { FestivalEventCard } from 'components/festival-event-card';

import { AfishaEvent } from 'shared/types';

import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints';
import { format } from 'shared/helpers/format-date';

import styles from './festival-event.module.css';

import { FestivalDate } from '../festival-date';

interface IProps extends AfishaEvent {
  isFirst: boolean;
}

const cx = cn.bind(styles);

const getYesterday = (dateTime: string) => {
  const date = new Date(dateTime);
  date.setDate(date.getDate() - 1);
  return date;
};

export const FestivalEvent = forwardRef<HTMLElement, IProps>((props, ref) => {
  const { eventBody, isFirst, dateTime } = props;
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const isRegistrationAlreadyOpen = isToday(new Date(dateTime)) || (isTomorrow(new Date(dateTime)) && new Date().getHours() >= 12);

  return (
    // TODO: тут происходит что-то непонятное: для чего этот компонент? зачем мы заворачиваем каждую карточку события в секцию? почему не редерим заголовки дат отдельным компонентом во вьюхе? семантически получается дичь
    <section key={props.id} className={cx('section')} ref={ref}>
      {isFirst && (
        <div className={cx('header')}>
          {!isMobile && (
            <FestivalDate
              dateTime={dateTime}
              alignItems="bottom"
            />
          )}
          <p className={cx({
            opened: isRegistrationAlreadyOpen,
            closed: !isRegistrationAlreadyOpen,
          })}
          >
            {isRegistrationAlreadyOpen
              ? 'открыта регистрация'
              : (
                <>
                  Регистрация откроется
                  <br/>
                  {`${format('d MMMM', getYesterday(dateTime))} в 12:00`}
                </>
              )}
          </p>
        </div>
      )}
      <FestivalEventCard
        key={props.id}
        className={cx('event')}
        time={format('H:mm', new Date(dateTime))}
        title={eventBody.name}
        image={'image' in eventBody ? eventBody.image : undefined}
        description={eventBody.description}
        actionUrl={isRegistrationAlreadyOpen ? props.actionUrl : undefined}
        credits={props.eventBody.team}
      />
    </section>
  );
});

FestivalEvent.displayName = 'FestivalEvent';
