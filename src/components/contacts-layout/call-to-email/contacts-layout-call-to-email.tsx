import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './contacts-layout-call-to-email.module.css';

const cx = classNames.bind(styles);

export const ContactsLayoutCallToEmail: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
