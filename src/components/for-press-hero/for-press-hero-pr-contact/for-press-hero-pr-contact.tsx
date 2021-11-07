import {FC} from 'react';
import cn from 'classnames/bind';

import styles from './for-press-hero-pr-contact.module.css';
import { Url } from 'shared/types';
import { InfoLink } from 'components/ui/info-link';

const cx = cn.bind(styles);

export interface IForPressHeroPrContact {
  data: {
    name: string,
    nameDative: string,
    email: string,
    description: string,
    photo: Url,
   },
   customClass?: string;
}

export const ForPressHeroPrContact: FC<IForPressHeroPrContact> = ({ data, customClass }) => {

  return (
    <div className={cx([customClass])}>
      <h6 className={cx('intro')}>
        По вопросам PR и аккредитации пишите {data.nameDative}
      </h6>
      <img className={cx('photo')} src={data.photo} alt={data.name} />
      <dl className={cx('info')}>
        <dt className={cx('hiddenText')}>
          Email:
        </dt>
        <dd className={cx('email')}>
          <InfoLink
            isOutsideLink={true}
            href={`mailto://${data.email}`}
            label={data.email}
            size= 'l'
            textDecoration='underline'
          />
        </dd>
        <dt className={cx('hiddenText')}>
          Должность:
        </dt>
        <dd className={cx('description')}>
          {data.description}
        </dd>
      </dl>
    </div>
  );
};
