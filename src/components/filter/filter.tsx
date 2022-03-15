import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { FilterField } from './field';

import styles from './filter.module.css';

interface FilterProps {
  children: ReactNode
  className?: string
}

const cx = classNames.bind(styles);

const Component = (props: FilterProps): JSX.Element => {
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

export const Filter = Object.assign(Component, {
  Field: FilterField,
});
