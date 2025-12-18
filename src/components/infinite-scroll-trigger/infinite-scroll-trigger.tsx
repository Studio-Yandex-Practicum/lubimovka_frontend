import classNames from 'classnames/bind';
import { useEffect } from 'react';

import { Spinner } from 'components/spinner';
import { useInViewport } from 'shared/hooks/use-in-viewport';

import styles from './infinite-scroll-trigger.module.css';

const cx = classNames.bind(styles);

interface Props {
  isLoading: boolean
  onLoadNeeded: () => void
  hasMore: boolean
}

export const InfiniteScrollTrigger: React.FC<Props> = ({
  isLoading,
  onLoadNeeded,
  hasMore,
}) => {
  const [ref, inViewport] = useInViewport();

  useEffect(() => {
    if (hasMore && inViewport && !isLoading) {
      onLoadNeeded();
    }
  }, [hasMore, inViewport, isLoading, onLoadNeeded]);

  if (isLoading) {
    return (
      <Spinner className={cx('spinner')}/>
    );
  }

  return (
    <span ref={ref} className={cx('trigger')}/>
  );
};
