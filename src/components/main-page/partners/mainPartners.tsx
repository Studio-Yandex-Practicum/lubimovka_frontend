/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames/bind';
import { Partner } from 'api-typings';

import { Partners } from 'components/partners';

import styles from './mainPartners.module.css';

const cx = cn.bind(styles);

interface IPartner {
  partners: Array<Partner>
}

export const MainPartners: FC<IPartner> = ({ partners }) => {
  console.log(partners);

  const filterPartners = (partners: IPartner, type: string) => {
    return partners.filter(p => p.type === type);
  };

  const returnElements = (type: string) => (
    filterPartners(partners, type).map((p: Partner) => {
      return <li key={p.id}>
        <Link href={p.url}>
          <a className={cx('link')}>
            <div className={cx('imageContainer')}>
              <Image 
                src={p.image} 
                alt={p.name}
                layout='fill' 
                objectFit='contain'
              />
            </div>
            {/* {p.name && <p className={cx('text')}>{p.name}</p>} */}
          </a>
        </Link>
      </li>;
    }));

  return (
    <section className={cx('partners')}>
      <Partners title='Партнёры фестиваля'>
        {returnElements('festival')}
      </Partners>
      <Partners title='Информационные партнёры'>
        {returnElements('info')}
      </Partners>
    </section>
  );
};
