import { FC } from 'react';
import cn from 'classnames/bind';

import { Url } from '../../../../shared/types/common';

import styles from './opportunity.module.css';

const cx = cn.bind(styles);

interface IOpportunityProps {
  title: string;
  picture: Url;
  kickies: string[];
}

export const Opportunity: FC<IOpportunityProps> = (props) => {
  const { title, picture, kickies } = props;

  return (
    <div className={cx('opportunityWrapper')}>
      <div className={cx('intro')}>
        <h2 className={cx('header')}>
          {title}
        </h2>
        <div className={cx('pictureContainer')}>
          <img src={picture} className={cx('picture')}/>
        </div>
      </div>
      <ul className={cx('kickies')}>
        {kickies.map((e,i) => {
          return (
            <li className={cx('kicky')} key={i}>{e}</li>
          );
        })}
      </ul>
    </div>
  );
};
