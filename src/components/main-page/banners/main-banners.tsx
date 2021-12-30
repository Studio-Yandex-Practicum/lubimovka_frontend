/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Banner } from 'api-typings';

import { Button } from 'components/ui/button';

interface IMainBanners {
  items: Array<Banner>
}

import styles from './main-banners.module.css';

export const MainBanners: FC<IMainBanners> = ({ items }) => {
  return (
    <section className={cn(styles.banners)}>
      <ul className={cn(styles.list)}>
        {
          items.map((item: Banner) => (
            <li className={cn(styles.item)} key={item.id}>
              <h2 className={cn(styles.title)}>
                Волонтёры Любимовки 2020 о своих впечатлениях
              </h2>
              <div className={cn(styles.container)}>
                <div className={cn(styles.content)}>
                  <p className={cn(styles.desc)}>
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
                  />
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  className={cn(styles.img)}
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
