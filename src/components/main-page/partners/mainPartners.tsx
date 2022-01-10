/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import cn from 'classnames/bind';

import { Partner } from 'api-typings';
import { Partners } from 'components/partners';

import styles from './mainPartners.module.css';

const cx = cn.bind(styles);

export interface IPartner {
  partners: Array<Partner>
}

export const MainPartners: FC<IPartner> = ({ partners }) => {
  return (
    <section className={cx('partners')}>
      <Partners 
        title='Партнёры фестиваля' 
        partners={partners.filter((p: Partner) => p.type !== 'info')}
      >
      </Partners>
      <Partners 
        title='Информационные партнёры' 
        partners={partners.filter((p: Partner) => p.type === 'info')}
      />
    </section>
  );
};
