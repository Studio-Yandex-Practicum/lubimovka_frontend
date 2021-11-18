import React, { FC } from 'react';
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

  const cb = (bannerRef: HTMLDivElement) => {
    function scrollHandler() {
      if (bannerRef.getBoundingClientRect().top < 0) {
        bannerRef.classList.add(cn(styles.bannerHide));
        return;
      }
      bannerRef.classList.remove(cn(styles.bannerHide));
    }
    window.addEventListener('scroll', scrollHandler);
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

