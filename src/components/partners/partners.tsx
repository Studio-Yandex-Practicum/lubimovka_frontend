import { FC } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { Partner } from 'api-typings';

import { PartnersLayout } from 'components/partners-layout';

import styles from './partners.module.css';

const cx = classNames.bind(styles);

export interface IPartner {
  [key: string]: Array<Partner>
}

export const Partners: FC<IPartner> = ({ festival, info }) => {
  const layout = (type: Array<Partner>, name: boolean = false) => (
    type.map((p: Partner) => (
      <li key={p.id}>
        <Link href={p.url}>
          <a className={cx('link')} target="_blank">
            <div className={cx('wrapper')}>
              <Image 
                src={p.image} 
                alt={p.name}
                layout="fill" 
                objectFit="scale-down"
              />
            </div>
            {name && <p className={cx('text')}>{p.name}</p>}
          </a>
        </Link>
      </li>
    ))
  );

  return (
    <section className={cx('partners')}>
      {festival && <PartnersLayout title="Партнёры фестиваля">
        {layout(festival, true)}
      </PartnersLayout>}
      {info && <PartnersLayout title="Информационные партнёры">
        {layout(info)}
      </PartnersLayout>}
    </section>
  );
};
