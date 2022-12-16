import { FC } from 'react';
import cn from 'classnames/bind';

import { Opportunity } from './opportunity/opportunity';

import styles from './opportunities.module.css';

const cx = cn.bind(styles);

interface IOpportunityProps {
  data: {
    title: string;
    picture: Url;
    kickies: string[];
  }[];
}

export const Opportunities: FC<IOpportunityProps> = (props) => {
  const { data } = props;
  return (
    <section className={cx('opportunities')}>
      {data.map((e,i) => {
        return (
          <Opportunity title={e.title} picture={e.picture} kickies={e.kickies} key={i}/>
        );
      })}
    </section>
  );
};
