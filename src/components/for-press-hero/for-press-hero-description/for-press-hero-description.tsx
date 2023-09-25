import cn from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

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
        size="s"
        border='bottom-left'
        href={data.link}
        icon={(
          <Icon
            glyph="arrow-right"
            width="100%"
            height="100%"
          />
        )}
        iconPosition="left"
        upperCase
        className={cx('button')}
      >
        {'Фотоальбомы'}
      </Button>
    </div>
  );
};
