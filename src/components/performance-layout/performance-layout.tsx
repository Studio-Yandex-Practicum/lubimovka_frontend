import classNames from 'classnames/bind';

import { PerformanceLayoutBottomImage } from './bottom-image';
import { PerformanceLayoutContent } from './content';
import { PerformanceLayoutCover } from './cover';
import { PerformanceLayoutEvents } from './events';
import { PerformanceLayoutGallery } from './gallery';
import { PerformanceLayoutIntro } from './intro';
import { PerformanceLayoutMediaReviews } from './media-reviews';
import { PerformanceLayoutReviews } from './reviews';
import { PerformanceLayoutShare } from './share';
import { PerformanceLayoutSummary } from './summary';

import type { ReactNode } from 'react';

import styles from './performance-layout.module.css';

interface IPerformanceLayoutProps {
  children: ReactNode
}

const cx = classNames.bind(styles);

const Component = (props: IPerformanceLayoutProps) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'PerformanceLayout';

export const PerformanceLayout = Object.assign(Component, {
  Summary: PerformanceLayoutSummary,
  Content: PerformanceLayoutContent,
  Gallery: PerformanceLayoutGallery,
  MediaReviews: PerformanceLayoutMediaReviews,
  Reviews: PerformanceLayoutReviews,
  BottomImage: PerformanceLayoutBottomImage,
  Share: PerformanceLayoutShare,
  Events: PerformanceLayoutEvents,
  Intro: PerformanceLayoutIntro,
  Cover: PerformanceLayoutCover,
});

