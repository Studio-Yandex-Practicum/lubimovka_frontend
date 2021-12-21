import React, { useEffect, useCallback, useRef, FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './banner-item.module.css';

interface IMainBannerItem {
  title: string
  desc: string
  buttonText: string
  buttonUrl: string
  imgAlt: string
  imgUrl: string
  cb: (handlerDebounced: () => void) => void
}

export const MainBannerItem: FC<IMainBannerItem> = (props):JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerContainerRef = useRef<HTMLDivElement>(null);

  const {
    title,
    desc,
    buttonText,
    buttonUrl,
    imgAlt,
    imgUrl,
    cb
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
    cb(scrollHandler);
  }, []);

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
