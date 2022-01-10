/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import cn from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';

import { Partner } from 'api-typings';
import styles from './partners.module.css';

const cx = cn.bind(styles);

interface IPartners {
  title: string
  partners: Array<Partner>
}

export const Partners: FC<IPartners> = ({ title, partners }) => {
  return (
    <aside className={cx('partners')}>
      <h4 className={cx('title')}>
        {title}
      </h4>
      <ul className={cx('list')}>
        {partners.map((p: Partner) => (
          <li key={p.id} className={cx('item')}>
            <Link href={p.url}>
              <a className={cx('link')}>
                <Image 
                  src={p.image} 
                  alt={p.name}
                  layout='fill' 
                  objectFit='scale-down'
                />
                {/* {p.name && <p className={cx('text')}>{p.name}</p>} */}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
