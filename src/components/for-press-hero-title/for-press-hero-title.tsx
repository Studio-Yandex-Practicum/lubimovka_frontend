import {FC} from 'react';
import cn from 'classnames/bind';

import styles from './for-press-hero-title.module.css';

const cx = cn.bind(styles);

export interface IForPressHeroTitleProps {
  data: {
    title: string,
   },
}

export const ForPressHeroTitle: FC<IForPressHeroTitleProps> = ({ data }) => {

  return (
    <h1 className={cx('title')}>
      {data.title}
    </h1>
  );
};
