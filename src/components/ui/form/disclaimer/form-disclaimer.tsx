import classNames from 'classnames/bind';
import { FC } from 'react';

import styles from './form-disclaimer.module.css';

const cx = classNames.bind(styles);

export const FormDisclaimer: FC = (props) => {
  const { children } = props;

  return (
    <p className={cx('disclaimer')}>
      {children}
    </p>
  );
};
