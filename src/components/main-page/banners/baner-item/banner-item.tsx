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
  }
}

export const MainBannerItem: FC<IMainBannerItemProps> = ({ item }):JSX.Element => {
  const {
    title,
    desc,
    buttonText,
    buttonUrl,
    imgAlt,
    imgUrl,
  } = item;

  return (
    <div className={ cn(styles.banner) }>
      <h2 className={ cn(styles.title) }>
        { title }
      </h2>
      <div className={ cn(styles.container) }>
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
