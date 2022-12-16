import classNames from 'classnames/bind';

import { PerformanceLayoutContent } from './content';
import { PerformanceLayoutSummary } from './summary';
import { PerformanceLayoutGallery } from './gallery';
import { PerformanceLayoutMediaReviews } from './media-reviews';
import { PerformanceLayoutReviews } from './reviews';
import { PerformanceLayoutBottomImage } from './bottom-image';
import { PerformanceLayoutShare } from './share';
import { PerformanceLayoutEvents } from './events';
import { PerformanceLayoutIntro } from './intro';
import { PerformanceLayoutCover } from './cover';

import type { ReactNode } from 'react';

import styles from './performance-layout.module.css';

interface IPerformanceLayoutProps {
  children: ReactNode;
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

