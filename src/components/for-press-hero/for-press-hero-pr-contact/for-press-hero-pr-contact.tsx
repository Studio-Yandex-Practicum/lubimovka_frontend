import cn from 'classnames/bind';
import Image from 'next/image';

import { Button } from 'components/ui/button2';

import type { FC } from 'react';

import styles from './for-press-hero-pr-contact.module.css';

const cx = cn.bind(styles);

export interface IForPressHeroPrContactProps {
  data: {
    name: string
    nameDative: string
    email: string
    role: string
    photo: Url
   }
   customClass?: string
}

export const ForPressHeroPrContact: FC<IForPressHeroPrContactProps> = ({ data, customClass }) => {

  return (
    <div className={cx([customClass])}>
      <h6 className={cx('intro')}>
        По вопросам PR и аккредитации пишите
        {' '}
        {data.nameDative}
      </h6>
      <div className={cx('photo')}>
        {data.photo && (
          <Image
            src={data.photo}
            alt={data.name}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <dl className={cx('info')}>
        <dt className={cx('hiddenText')}>
          Email:
        </dt>
        <dd className={cx('email')}>
          <Button
            border='none'
            size="m"
            animation='invert'
            href={`mailto:${data.email}`}
            className={cx('button')}
          >
            {data.email}
          </Button>
        </dd>
        <dt className={cx('hiddenText')}>
          Должность:
        </dt>
        <dd className={cx('description')}>
          {data.role}
        </dd>
      </dl>
    </div>
  );
};
