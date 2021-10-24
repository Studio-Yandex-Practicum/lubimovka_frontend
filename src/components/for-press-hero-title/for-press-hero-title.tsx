import {FC} from 'react';
import { Button } from '../ui/button';
import cn from 'classnames/bind';

import styles from './for-press-hero-title.module.css';
import { Url } from 'shared/types/common';

const cx = cn.bind(styles);

export interface IForPressHeroTitleProps {
  data: {
    title: string,
    description: string,
    link: Url,
   },
}

export const ForPressHeroTitle: FC<IForPressHeroTitleProps> = ({ data }) => {

  return (
    <section>
      <h1 className={cx('title')}>{data.title}</h1>
      <p className={cx('description')}>{data.description}</p>
      <Button
        className={cx('button')}
        align='start'
        width='173px'
        size='s'
        view='primary'
        iconPlace='left'
        icon='arrow-right'
        label='Фотоальбомы'
        border='bottomLeft'
        isLink
        href={data.link}
      />
    </section>
  );
};
