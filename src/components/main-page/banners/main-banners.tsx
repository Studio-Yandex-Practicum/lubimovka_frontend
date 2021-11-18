import React, { useEffect, useRef, FC } from 'react';
import cn from 'classnames';

import { MainBannerItem } from './baner-item/banner-item';

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
  const bannersRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  
  // const [isWaiting, setIsWaiting] = useState(false);

  // function throttle (cb: () => void, delay: number) {
  //   let isWaiting = false;
  //   function wraper() {
  //     // Ждем, ничего не возвращаем
  //     if (isWaiting) {
  //       console.log(1);
  //       return;
  //     }
  //     // Иначе вызываем cb, и ждем
  //     cb();
  //     isWaiting = true;
  //     setTimeout(() => {
  //       isWaiting = false;
  //     }, delay);
  //   }

  //   return wraper;
  // }

  // function debounce(cb: () => void, delay: number) {
  //   let timer: NodeJS.Timeout;
  //   return function(...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(cb.bind(this, ...args), delay || 0);
  //   };
  // }

  // const scrollHandler = () => {
  //   if (bannersRef.current && itemRef.current) {
  //     const eventBanner = bannersRef.current.getBoundingClientRect();
  //     const eventLi = itemRef.current.getBoundingClientRect();
  //     if (eventBanner.y < 0) {
  //       console.log(eventLi.height);
  //       console.log(eventBanner.y);
  //       console.log(eventLi.height + eventBanner.y);
  //       itemRef.current.style.maxHeight = eventLi.height + eventBanner.y + 'px';
  //     } else {
  //       itemRef.current.style.maxHeight = eventLi.height - eventBanner.y + 'px';
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollHandler);

  //   // return () => {
  //   //   window.removeEventListener('scroll', () => scrollHandler());
  //   // };
  // }, []);

  return (
    <section className={ cn(styles.banners) }>
      <ul className={ cn(styles.list) }>
        { data.map((item: IMainBannersProps) => {
          return (
            <li className={ cn(styles.item) } key={item.id} ref={itemRef}>
              <MainBannerItem item={ item } />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

