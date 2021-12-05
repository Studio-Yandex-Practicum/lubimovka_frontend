import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { PerformanceLayoutHeadline } from './headline';
import { PerformanceLayoutAside } from './aside';
import { PerformanceLayoutVideo } from './video';
import { PerformanceLayoutText } from './text';
import { PerformanceLayoutPlay } from './play';
import { PerformanceLayoutGallery } from './gallery';
import { PerformanceLayoutCritique } from './critique';
import { PerformanceLayoutReview } from './review';
import { PerformanceLayoutBottomImage } from './bottom-image';
import { PerformanceLayoutShare } from './share';

import styles from './performance-layout.module.css';

interface IPerformanceLayoutProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const PerformanceLayout = (props: IPerformanceLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('layout')}>
      {children}
    </div>
  );
};

PerformanceLayout.Headline = PerformanceLayoutHeadline;
PerformanceLayout.Aside = PerformanceLayoutAside;
PerformanceLayout.Video = PerformanceLayoutVideo;
PerformanceLayout.Text = PerformanceLayoutText;
PerformanceLayout.Play = PerformanceLayoutPlay;
PerformanceLayout.Gallery = PerformanceLayoutGallery;
PerformanceLayout.Critique = PerformanceLayoutCritique;
PerformanceLayout.Review = PerformanceLayoutReview;
PerformanceLayout.BottomImage = PerformanceLayoutBottomImage;
PerformanceLayout.Share = PerformanceLayoutShare;
