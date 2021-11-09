import {FC} from 'react';
import { Button } from '../../ui/button';
import cn from 'classnames/bind';

import styles from './for-press-hero-description.module.css';
import { Url } from 'shared/types/common';

const cx = cn.bind(styles);

export interface IForPressHeroDescriptionProps {
  data: {
    description: string,
    link: Url,
   },
   customClass?: string;
}

export const ForPressHeroDescription: FC<IForPressHeroDescriptionProps> = ({ data, customClass }) => {

  return (
    <div className={cx([customClass])}>
      <p className={cx('description')}>{data.description}</p>
      <Button
        className={cx('button')}
        align='start'
        width='scale(173px)'
        size='s'
        view='primary'
        iconPlace='left'
        icon='arrow-right'
        label='Фотоальбомы'
        border='bottomLeft'
        isLink
        href={data.link}
      />
    </div>
  );
};
