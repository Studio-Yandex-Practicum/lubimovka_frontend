/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames/bind';

import { Banner, MainBanners as IMainBanners } from 'api-typings';
import { Button } from 'components/ui/button';

import styles from './main-banners.module.css';

const cx = cn.bind(styles);

export const MainBanners: FC<IMainBanners> = ({ items }) => {
  return (
    <section className={cx('banners')}>
      <ul className={cx('list')}>
        {
          items.map((item: Banner) => (
            <li className={cx('item')} key={item.id}>
              <h2 className={cx('title')}>
                Волонтёры Любимовки 2020 о своих впечатлениях
              </h2>
              <div className={cx('container')}>
                <div className={cx('content')}>
                  <p className={cx('desc')}>
                    {item.description}
                  </p>
                  <Button 
                    label={item.button} 
                    iconPlace='left' 
                    icon='arrow-right' 
                    gap='4px'
                    border='bottomLeft'
                    isLink={true}
                    href={item.url}
                    className={cx('icon')}
                  />
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={cx('img')}
                  width={486}
                  height={228}
                  layout="responsive"
                />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
