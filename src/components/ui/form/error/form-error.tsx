import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './form-error.module.css';

const cx = classNames.bind(styles);

export const FormError: FC = (props) => {
  const { children } = props;

  return (
    <p className={cx('root')}>
      {children}
    </p>
  );
};
