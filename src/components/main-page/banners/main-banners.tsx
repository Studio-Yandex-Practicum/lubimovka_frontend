import React, { FC, useEffect, useState, useCallback } from 'react';
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

function debounce(cb: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(cb, delay || 0);
  };
}

export const MainBanners: FC<IProps> = ({ data }):JSX.Element => {
  const [scrollHandlers, setScrollHandler] = useState<(() => void)[]>([]);

  useEffect(() => {
    const handlerDebounced = debounce(() => scrollHandlers.map((item: () => void) => item()), 10);
    if (scrollHandlers.length) {
      window.addEventListener('scroll', handlerDebounced);
    }
    return () => { window.removeEventListener('scroll', handlerDebounced);};
  }, [scrollHandlers]);

  const cb = useCallback((handlerDebounced: () => void) => {
    setScrollHandler(state => [...state, handlerDebounced]);
  }, [setScrollHandler]);

  return (
    <section className={cn(styles.banners)}>
      <ul className={cn(styles.list)}>
        {data.map((item: IMainBannersProps) => {
          return (
            <li className={cn(styles.item)} key={item.id}>
              <MainBannerItem {...item} cb={cb}/>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
