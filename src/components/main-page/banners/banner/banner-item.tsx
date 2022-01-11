/* eslint-disable import/no-unresolved */
import React, { useEffect, useCallback, useRef, FC } from 'react';
import Image from 'next/image';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import styles from './banner-item.module.css';

const cx = cn.bind(styles);
interface IMainBannerItem {
  title: string
  desc: string
  buttonText: string
  buttonUrl: string
  imgAlt: string
  image: string
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
    image,
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
    <div className={cx('banner')} ref={bannerRef}>
      <h2 className={cx('title')}>
        {title}
      </h2>
      <div className={cx('container')} ref={bannerContainerRef}>
        <div className={cx('content')}>
          <p className={cx('desc')}>
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
            className={cx('button')}
          />
        </div>
        <div className={cx('wrapper')}>
          <Image 
            src={image}
            alt={imgAlt}
            className={cx('.img')}
            layout='fill'
            objectFit='fill'
          />
        </div>
      </div>
    </div>
  );
};
