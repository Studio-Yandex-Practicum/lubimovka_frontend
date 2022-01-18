import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames/bind';
import { Banner, MainBanners as IMainBanners } from 'api-typings';

import { Button } from 'components/ui/button';

import styles from './main-banners.module.css';

const cx = cn.bind(styles);

export const MainBanners: FC<IMainBanners> = ({ items }) => (
  <section className={cx('banners')}>
    <ul className={cx('list')}>
      {
        items.map((item: Banner) => (
          <>
            <li className={cx('item')}>
              <h3 className={cx('title')}>
                {item.title}
              </h3>
              <aside className={cx('container')}>
                <div className={cx('content')}>
                  <p className={cx('desc')}>
                    {item.description}
                  </p>
                  <Button 
                    label={item.button}
                    iconPlace="left" 
                    icon="arrow-right" 
                    gap="4px"
                    border="bottomLeft"
                    isLink={true}
                    href={item.url}
                    className={cx('button')}
                  />
                </div>
                <Link href={item.url}>
                  <a className={cx('link')} target="_blank">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={486}
                      height={228}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </aside>
            </li>
          </>
        ))
      }
    </ul>
  </section>
);
