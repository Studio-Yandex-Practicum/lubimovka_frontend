import { FC } from 'react';
import cn from 'classnames/bind';

import { FestivalDay } from 'components/afisha-page/festival-day';
import { PaginatedAfishaEventListOutputList } from 'api-typings';

import styles from './afisha-festival-days.module.css';

const cx = cn.bind(styles);

export const FestivalDays: FC<PaginatedAfishaEventListOutputList> = (props) => {
  const { results } = props;

  return (
    <section className={cx('section')}>
      {results?.map(event =>
        <FestivalDay key={event.id} {...event}/>
      )}
    </section>
  );
};
