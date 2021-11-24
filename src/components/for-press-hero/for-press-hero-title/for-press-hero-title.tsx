import { FC } from 'react';
import cn from 'classnames/bind';

import styles from './for-press-hero-title.module.css';

const cx = cn.bind(styles);

export interface IForPressHeroTitleProps {
  data: {
    title: string,
   },
   customClass?: string;
}

export const ForPressHeroTitle: FC<IForPressHeroTitleProps> = ({ data, customClass }) => {

  return (
    <h1 className={cx('title', [customClass])}>
      {data.title}
    </h1>
  );
};
