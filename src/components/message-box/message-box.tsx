import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './message-box.module.css';

interface ILogotypeProps {
  message: string,
}

const cx = classNames.bind(styles);

export const MessageBox: FC<ILogotypeProps> = (props) => {
  const {
    message,
  } = props;

  return (
    <p className={cx('message-box')}>
      {message}
    </p>

  );
};
