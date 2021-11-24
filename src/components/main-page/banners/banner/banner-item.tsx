import React, { useEffect, useCallback, useRef, FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './banner-item.module.css';
import { IMainBannersProps } from '../main-banners';

export const MainBannerItem: FC<IMainBannersProps> = (props):JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerContainer = useRef<HTMLDivElement>(null);

  const {
    title,
    desc,
    buttonText,
    buttonUrl,
    imgAlt,
    imgUrl,
  } = props;

  function debounce(cb: () => void, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(cb, delay || 0);
    };
  }

  const scrollHandler = useCallback(() => {
    if (bannerRef.current && bannerContainer.current && bannerRef.current.getBoundingClientRect().top < 0) {
      bannerContainer.current.classList.add(cn(styles.hideContainer));
      return;
    }
    if (bannerRef.current && bannerContainer.current) {
      bannerContainer.current.classList.remove(cn(styles.hideContainer));
    }
  }, [bannerRef, bannerContainer]);

  useEffect(() => {
    const handlerDebounced = debounce(scrollHandler, 10);
    if (bannerRef.current && bannerContainer.current) {
      window.addEventListener('scroll', handlerDebounced);
    }
    return () => {
      window.removeEventListener('scroll', handlerDebounced);
    };
  }, [scrollHandler]);

  return (
    <div className={cn(styles.banner)} ref={bannerRef}>
      <h2 className={cn(styles.title)}>
        {title}
      </h2>
      <div className={cn(styles.container)} ref={bannerContainer}>
        <div className={cn(styles.content)}>
          <p className={cn(styles.desc)}>
            {desc}
          </p>
          <Button 
            label={buttonText}
            iconPlace='left' 
            icon='arrow-right' 
            gap='4px'
            border='bottomLeft'
            isLink={true}
            href={buttonUrl}
            className={cn(styles.button)}
          />
        </div>
        <img 
          src={imgUrl}
          alt={imgAlt}
          className={cn(styles.img)}
        />
      </div>
    </div>
  );
};
