import classNames from 'classnames/bind';

import type { PropsWithChildren } from 'react';

import styles from './filter-actions.module.css';

const cx = classNames.bind(styles);

interface FilterActionsProps{
  className?: string
}

export const FilterActions = (props: PropsWithChildren<FilterActionsProps>) => {
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
