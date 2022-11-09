import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import { Url } from 'shared/types/common';

import styles from './for-press-hero-description.module.css';

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
      <p className={cx('description')}>
        {data.description}
      </p>
      <Button
        size="s"
        border="bottom-left"
        className={cx('button')}
        icon={(
          <Icon
            glyph="arrow-right"
            width="100%"
            height="100%"
          />
        )}
        iconPosition="left"
        href={data.link}
        upperCase
      >
        Фотоальбомы
      </Button>
    </div>
  );
};
