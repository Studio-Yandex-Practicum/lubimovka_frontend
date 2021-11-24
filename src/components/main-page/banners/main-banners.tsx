import React, { FC } from 'react';
import cn from 'classnames';

import { MainBannerItem } from './banner';

import styles from './main-banners.module.css';

export interface IMainBannersProps {
  id: number
  title: string
  desc: string
  buttonText: string
  buttonUrl: string
  imgAlt: string
  imgUrl: string
}

interface IProps {
  data: IMainBannersProps[]
}

export const MainBanners: FC<IProps> = ({ data }):JSX.Element => {
  return (
    <section className={cn(styles.banners)}>
      <ul className={cn(styles.list)}>
        {data.map((item: IMainBannersProps) => {
          return (
            <li className={cn(styles.item)} key={item.id}>
              <MainBannerItem {...item}/>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
