import classNames from 'classnames/bind';

import type { PropsWithChildren } from 'react';

import styles from './press-release-layout-actions.module.css';

const cx = classNames.bind(styles);

interface FilterActionsProps{
  className?: string
}

export const PressReleaseLayoutActions = (props: PropsWithChildren<FilterActionsProps>) => {
  const {
    children,
    className,
  } = props;

  return (
    <div className={cx('root', className)}>
      {children}
    </div>
  );
};
