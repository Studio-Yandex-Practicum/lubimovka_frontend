import { FC } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { Partner } from 'api-typings';

import { Partners } from 'components/partners';

import styles from './mainPartners.module.css';

const cx = classNames.bind(styles);

export interface IPartner {
  [key: string]: Array<Partner>
}

export const MainPartners: FC<IPartner> = ({ general, festival, info }) => {
  const layout = (type: Array<Partner>, text?: string) => (
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
            {text && <p className={cx('text')}>{text}</p>}
          </a>
        </Link>
      </li>
    ))
  );

  return (
    <section className={cx('partners')}>
      {(general || festival) && <Partners title="Партнёры фестиваля">
        {general && layout(general, 'Генеральный партнёр')}
        {festival && layout(festival)}
      </Partners>}
      {info && <Partners title="Информационные партнёры">
        {layout(info)}
      </Partners>}
    </section>
  );
};
