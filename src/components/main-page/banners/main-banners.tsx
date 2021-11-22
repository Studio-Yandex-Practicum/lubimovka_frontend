import React, { FC, useRef } from 'react';
import cn from 'classnames';

import { MainBannerItem } from './baner-item';

import styles from './main-banners.module.css';

interface IMainBannersProps {
  id: number
  title: string
  desc: string
  buttonText: string
  buttonUrl: string
  imgAlt: string
  imgUrl: string
}

interface IMainBannersProps {
  data: IMainBannersProps[]
}

export const MainBanners: FC<IMainBannersProps> = ({ data }):JSX.Element => {
  function debounce(cb: () => void, delay: number) {
    let timer: NodeJS.Timeout;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(cb, delay || 0);
    };
  }

  const cb = (bannerRef: HTMLDivElement, bannerContainer: HTMLDivElement) => {
    function scrollHandler() {
      if (bannerRef.getBoundingClientRect().top < 0) {
        bannerContainer.classList.add(cn(styles.hideContainer));
        return;
      }
      bannerContainer.classList.remove(cn(styles.hideContainer));
    }
    const handlerDebounced = debounce(scrollHandler, 10);
    window.addEventListener('scroll', handlerDebounced);
  };

  return (
    <section className={ cn(styles.banners) }>
      <ul className={ cn(styles.list) }>
        { data.map((item: IMainBannersProps) => {
          return (
            <li className={ cn(styles.item) } key={item.id}>
              <MainBannerItem item={ item } cb={ cb } />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
