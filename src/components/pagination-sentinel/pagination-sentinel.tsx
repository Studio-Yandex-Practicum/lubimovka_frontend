import classNames from 'classnames/bind';
import { useEffect } from 'react';

import { Spinner } from 'components/spinner';
import { useIntersection } from 'shared/hooks/use-intersection';

import styles from './pagination-sentinel.module.css';

const cx = classNames.bind(styles);

interface PaginationSentinelProps {
  pending: boolean
  loadMoreCallback: () => void
}

export const PaginationSentinel: React.VFC<PaginationSentinelProps> = (props) => {
  const { pending, loadMoreCallback } = props;
  const [sentinelRef, sentinelIsOnScreen] = useIntersection<HTMLSpanElement>();

  useEffect(() => {
    if (sentinelIsOnScreen) {
      loadMoreCallback();
    }
  }, [sentinelIsOnScreen, loadMoreCallback]);

  if (pending) {
    return (
      <Spinner className={cx('spinner')}/>
    );
  }

  return (
    <span ref={sentinelRef} className={cx('sentinel')}/>
  );
};
