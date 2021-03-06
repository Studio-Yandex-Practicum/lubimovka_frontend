import cn from 'classnames/bind';

import breakpoints from 'shared/breakpoints';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { FC } from 'react';

import styles from './festival-events.module.css';

import { FestivalEventsMobile } from '../festival-events-mobile';
import { FestivalEventsDesktop } from '../festival-events-desktop';

const cx = cn.bind(styles);

export const FestivalEvents: FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  return (
    <section className={cx('section')}>
      {isMobile ? (
        <FestivalEventsMobile/>
      ) : (
        <FestivalEventsDesktop/>
      )}
    </section>
  );
};
