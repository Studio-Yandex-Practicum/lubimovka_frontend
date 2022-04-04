import { FC, useRef } from 'react';
import cn from 'classnames/bind';

import { FestivalEvent } from '../festival-event';
import { useAfisha } from '../afisha-provider';
import { visibility } from 'shared/helpers/visibility';

import styles from './festival-events-desktop.module.css';
import { useScroll } from 'shared/hooks/use-scroll';
import { Loader } from 'components/ui/loader';

const cx = cn.bind(styles);

export const FestivalEventsDesktop: FC = () => {
  const { selectEvents, takeEvents, isLoading } = useAfisha();
  const eventsRef = useRef<HTMLElement>(null);

  useScroll(() => {
    if (visibility(eventsRef.current).bottom) {
      takeEvents();
    };
  });

  return (
    <section className={cx('section')} ref={eventsRef}>
      {selectEvents().map((e, i) => (
        <FestivalEvent
          key={e.id}
          isFirst={i===0 || selectEvents()[--i].dateTime.slice(0,10) !== e.dateTime.slice(0,10)}
          {...e}
        />
      ))}
      {isLoading() &&<Loader/>}
    </section>
  );
};
