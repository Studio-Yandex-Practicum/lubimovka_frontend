import React, { FC/* , useRef, useEffect, useState */, RefObject, useRef, useEffect } from 'react';
import cn from 'classnames';

// import { Button } from 'components/ui/button';
import { MainBannerItem, IBanerItemPublic } from './banner';

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
  const banerItemRef = useRef(null) as RefObject<IBanerItemPublic>;

  useEffect(() => {
    if (banerItemRef.current) {
      console.log(1);
      const handlerDebounced = debounce(banerItemRef.current.scrollHandler, 10);
      window.addEventListener('scroll', handlerDebounced);
    }
    // const handlerDebounced = debounce(banerItemRef.current?.scrollHandler, 10);
    // window.addEventListener('scroll', handlerDebounced);
    // return () => {
    //   window.removeEventListener('scroll', handlerDebounced);
    // };

    ref={el => elementRef.current[x] = el}
  }, []);

  // const bannerRef = useRef<HTMLDivElement>(null);
  // const bannerContainerRef = useRef(null);

  // const [bannerList, setBannerList] = useState([]);

  // // Колличество элементов
  // const [itemlist, setItemlist] = useState(0);

  // useEffect(() => {
  //   data.forEach((item, i) => {
  //     setItemlist(i + 1);
  //   });
  // }, [data]);

  // useEffect(() => {
  //   console.log(bannerList);
  // }, [bannerList]);

  // const scrollHandler = () => {
  //   const banner = bannerRef.current;
  //   if (banner && itemlist !== 0) {
  //     setBannerList((state: string[]) => {
  //       if (state.length !== itemlist) {
  //         const newState = state.slice(0);
  //         newState.push(banner);
  //         return newState;
  //       }
  //       return state;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   addEventListener('scroll', scrollHandler);
  //   return () => {
  //     removeEventListener('scroll', scrollHandler);
  //   };
  // }, [itemlist]);

  return (
    <section className={cn(styles.banners)}>
      <ul className={cn(styles.list)}>
        {data.map((item: IMainBannersProps) => {
          return (
            <li className={cn(styles.item)} key={item.id}>
              <MainBannerItem {...item} ref={banerItemRef}/>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
