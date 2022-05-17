import { FC, useCallback, useMemo, useRef } from 'react';
import cn from 'classnames/bind';

import { Spinner } from 'components/spinner';
import { AfishaPagination } from 'components/afisha-page/afisha-pagination';

import styles from './festival-events-mobile.module.css';

import { FestivalDate } from '../festival-date';
import { useAfisha } from '../afisha-provider';
import { FestivalEvent } from '../festival-event';

const cx = cn.bind(styles);

export const FestivalEventsMobile: FC = () => {
  const { selectInfo, selectEvents, putDay, selectDay, isLoading } = useAfisha();
  const eventsRef = useRef<HTMLElement>(null);

  const { afishaDates } = selectInfo();
  const day = selectDay();
  const events = selectEvents(afishaDates[day]);

  const onChange = useCallback((index: number) => {
    putDay(index);
  }, [putDay]);

  return (
    <section className={cx('paginationContainer')} ref={eventsRef}>
      <AfishaPagination
        initial={useMemo(() => day, [])}
        onChange={onChange}
      >
        {afishaDates.map((date) => (
          <div key={`page-${date}`} className={cx('paginationItem')}>
            <FestivalDate dateTime={date}/>
          </div>
        ))}
      </AfishaPagination>
      <div className={cx('section')}>
        {isLoading() &&<Spinner className={cx('spinner')}/>}
        {!isLoading() && events.map((e, index) => <FestivalEvent key={e.id} isFirst={index===0} {...e}/>)}
      </div>
    </section>
  );
};
