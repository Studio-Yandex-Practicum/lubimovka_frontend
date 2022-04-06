import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './spinner.module.css';

interface SpinnerProps {
  className?: string
}

const cx = classNames.bind(styles);

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div
    className={cx(
      'root',
      className,
    )}
  >
    <div className={cx('inner')}>
      <span className={cx('particle')}/>
    </div>
  </div>
);
