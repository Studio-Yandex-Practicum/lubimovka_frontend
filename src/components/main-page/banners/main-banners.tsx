import React, { FC, useEffect, useState, useCallback } from 'react';
import cn from 'classnames/bind';

import { Banner, MainBanners as IMainBanners } from 'api-typings';
import { MainBannerItem } from './banner';

import styles from './main-banners.module.css';

const cx = cn.bind(styles);

function debounce(cb: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(cb, delay || 0);
  };
}

export const MainBanners: FC<IMainBanners> = ({ items }) => {
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
    <section className={cx('banners')}>
      <ul className={cx('list')}>
        {
          items.map((item: Banner) => (
            <li className={cx('item')} key={item.id}>
              <MainBannerItem 
                cb={cb} 
                title={item.title} 
                desc={item.description} 
                buttonText={item.button}
                buttonUrl={item.url}
                imgAlt={item.title}
                image={item.image}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
};
