import { FC } from 'react';
import { Url } from '../../../shared/types/common';
import cn from 'classnames/bind';
import styles from './opportunity.module.css';

const cx = cn.bind(styles);

interface IOpportunityProps {
  title: string;
  picture: Url;
  kickies: [string];
}

export const Opportunity: FC<IOpportunityProps> = (props) => {
  const { title, picture, kickies } = props;

  return (
    <div className={cx('stub')}>
      {title}
      {picture}
      {kickies}
    </div>
  );
};
