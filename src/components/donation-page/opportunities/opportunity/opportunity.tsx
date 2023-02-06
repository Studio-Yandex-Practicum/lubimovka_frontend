import cn from 'classnames/bind';
import Image from 'next/image';

import type { FC } from 'react';

import styles from './opportunity.module.css';

const cx = cn.bind(styles);

interface IOpportunityProps {
  title: string
  picture: Url
  kickies: string[]
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
          <div className={cx('picture')}>
            <Image
              src={picture}
              alt="Изображение творческих людей, поглощённых творческим процессом"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <ul className={cx('kickies')}>
        {kickies.map((e,i) => {
          return (
            <li className={cx('kicky')} key={i}>
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
