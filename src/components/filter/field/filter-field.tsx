import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './filter-field.module.css';

interface FilterFieldProps {
  caption: string
  children: ReactNode
  hiddenCaption?: boolean
  className?: string
}

const cx = classNames.bind(styles);

export const FilterField = (props: FilterFieldProps): JSX.Element => {
  const {
    caption,
    children,
    hiddenCaption,
    className,
  } = props;

  return (
    <div
      className={cx(
        hiddenCaption ? 'hidden-caption' : 'normal',
        className,
      )}
    >
      <label>
        <span className={cx('caption')}>
          {caption}
        </span>
        <div className={cx('control')}>
          {children}
        </div>
      </label>
    </div>
  );
};
