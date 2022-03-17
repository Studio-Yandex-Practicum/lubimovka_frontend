import { FC, useState } from 'react';
import cn from 'classnames/bind';

import { FestivalEvent } from 'components/afisha-page/festival-event';
import { AfishaEventListOutput, PaginatedAfishaEventListOutputList } from 'api-typings';

import styles from './afisha-festival-events.module.css';

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

export const FestivalEvents: FC<PaginatedAfishaEventListOutputList> = (props) => {
  const { results } = props;

  // useEffect(() => {}, []);

  const [events] = useState(groupByDay(results));

  return (
    <section className={cx('section')}>
      {getEvents(events)}
    </section>
  );
};
