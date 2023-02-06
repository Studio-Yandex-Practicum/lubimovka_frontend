import cn from 'classnames/bind';

import { Button } from 'components/ui/button';

import type { FC } from 'react';

import styles from './for-press-hero-description.module.css';

const cx = cn.bind(styles);

export interface IForPressHeroDescriptionProps {
  data: {
    description: string
    link: Url
   }
   customClass?: string
}

export const ForPressHeroDescription: FC<IForPressHeroDescriptionProps> = ({ data, customClass }) => {

  return (
    <div className={cx([customClass])}>
      <p className={cx('description')}>
        {data.description}
      </p>
      <Button
        className={cx('button')}
        align="start"
        size="s"
        view="primary"
        iconPlace="left"
        icon="arrow-right"
        label="Фотоальбомы"
        border="bottomLeft"
        isLink
        href={data.link}
      />
    </div>
  );
};
