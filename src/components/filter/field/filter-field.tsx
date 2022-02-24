import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './filter-field.module.css';

interface FilterFieldProps {
  children: ReactNode
  className?: string
}

const cx = classNames.bind(styles);

export const FilterField = (props: FilterFieldProps): JSX.Element => {
  const { children, className } = props;

  return (
    <div
      className={cx(
        'root',
        className,
      )}
    >
      {children}
    </div>
  );
};
