import React, { useEffect, useCallback, useRef, FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Button } from 'components/ui/button';
import { IMainBannersProps } from '../main-banners';

import styles from './banner-item.module.css';

function debounce(cb: () => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(cb, delay || 0);
  };
}

export const MainBannerItem: FC<IMainBannersProps> = (props):JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerContainerRef = useRef<HTMLDivElement>(null);

  const {
    title,
    desc,
    buttonText,
    buttonUrl,
    imgAlt,
    imgUrl,
  } = props;

  const scrollHandler = useCallback(() => {
    const banner = bannerRef.current;
    const bannerContainer = bannerContainerRef.current;
    if (banner && bannerContainer && banner.getBoundingClientRect().top < 0) {
      bannerContainer.classList.add(cn(styles.hideContainer));
      return;
    }
    if (banner && bannerContainer) {
      bannerContainer.classList.remove(cn(styles.hideContainer));
    }
  }, [bannerRef, bannerContainerRef]);

  useEffect(() => {
    const handlerDebounced = debounce(scrollHandler, 10);
    if (bannerRef.current && bannerContainerRef.current) {
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
      <div className={cn(styles.container)} ref={bannerContainerRef}>
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
        <Image 
          src={imgUrl}
          alt={imgAlt}
          className={cn(styles.img)}
          width={630}
          height={277}
          layout="intrinsic"
        />
      </div>
    </div>
  );
};
