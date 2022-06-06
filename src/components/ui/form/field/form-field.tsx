import classNames from 'classnames/bind';

import { FC } from 'react';

import styles from './form-field.module.css';

const cx = classNames.bind(styles);

export const FormField: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
