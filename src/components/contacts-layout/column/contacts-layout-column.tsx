import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './contacts-layout-column.module.css';

const cx = classNames.bind(styles);

export const ContactsLayoutColumn: FC = (props): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
