import { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './pagination-sentinel.module.css';

const cx = classNames.bind(styles);

export const PaginationSentinel = forwardRef<HTMLSpanElement>((props, ref) => (
  <span ref={ref} className={cx('root')}/>
));

PaginationSentinel.displayName = 'PaginationSentinel';
