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
  const [scrollHandlers, setScrollHandler] = useState([]);

  const scrollBanners = useCallback(() => scrollHandlers.map((item: () => void) => item()), [scrollHandlers]);

  useEffect(() => {
    const handlerDebounced = debounce(scrollBanners, 10);
    if (scrollHandlers.length) {
      window.addEventListener('scroll', handlerDebounced);
    }
    return () => window.removeEventListener('scroll', handlerDebounced);
  }, [scrollHandlers, scrollBanners]);

  const cb = (handlerDebounced: () => void) => {
    setScrollHandler(state => {
      const newState = state.slice(0);
      newState.push(handlerDebounced);
      return newState;
    });
  };

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
