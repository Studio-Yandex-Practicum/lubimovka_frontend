import classNames from 'classnames/bind';

import { FilterField } from './field';
import { FilterActions } from './actions';

import type { PropsWithChildren } from 'react';

import styles from './filter.module.css';

interface FilterProps {
  className?: string
}

const cx = classNames.bind(styles);

const Component = (props: PropsWithChildren<FilterProps>) => {
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

Component.displayName = 'Filter';

export const Filter = Object.assign(Component, {
  Field: FilterField,
  Actions: FilterActions,
});
