import React, { useEffect, useRef, FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './banner-item.module.css';

interface IMainBannerItemProps {
  item: {
    title: string
    desc: string
    buttonText: string
    buttonUrl: string
    imgAlt: string
    imgUrl: string
  },
  cb: (bannerRef: HTMLDivElement) => void
}

export const MainBannerItem: FC<IMainBannerItemProps> = ({ item, cb }):JSX.Element => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerContainer = useRef<HTMLDivElement>(null);

  const {
    title,
    desc,
    buttonText,
    buttonUrl,
    imgAlt,
    imgUrl,
  } = item;

  useEffect(() => {
    if (bannerRef.current && bannerContainer) {
      cb(bannerRef.current, bannerContainer.current);
    }
  }, []);

  return (
    <div className={ cn(styles.banner) } ref={ bannerRef }>
      <h2 className={ cn(styles.title) }>
        { title }
      </h2>
      <div className={ cn(styles.container) } ref={ bannerContainer }>
        <div className={ cn(styles.content) }>
          <p className={ cn(styles.desc) }>
            { desc }
          </p>
          <Button 
            label={ buttonText }
            iconPlace='left' 
            icon='arrow-right' 
            gap='4px'
            border='bottomLeft'
            isLink={ true }
            href={ buttonUrl }
          />
        </div>
        <img 
          src={ imgUrl }
          alt={ imgAlt }
          className={ cn(styles.img) }
        />
      </div>
    </div>
  );
};
