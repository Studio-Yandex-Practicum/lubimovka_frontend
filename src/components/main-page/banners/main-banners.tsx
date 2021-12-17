import { FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';
import { MainBanners, Banner } from 'api-typings';

import styles from './main-banners.module.css';

export const MainBanners: FC<MainBanners> = ({ items }) => {
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
                <img 
                  src='"https://lubimovka.kiryanov.ru/media/images/main/banner/banner_ihwbuQU.jpg"'
                  alt='Волонтеры'
                  className={cn(styles.img)}
                />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
