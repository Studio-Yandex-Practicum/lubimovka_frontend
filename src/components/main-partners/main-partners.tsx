import { FC } from 'react';
import { Section } from 'components/section';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

import styles from './main-partners.module.css';
import data from './assets/mock-data.json';

export const MainPartners: FC = () => {
  return (
    <div className={cx('container')}>
      {data.map((partners) => (
        <Section type="partners" title={partners.title} key={partners.id}>
          <p>Содержание</p>
        </Section>
      ))}
    </div>
  );
};
