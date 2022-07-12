import classNames from 'classnames/bind';

import styles from './feed-list-item.module.css';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const FeedListItem: FC = (props) => {
  const { children } = props;

  return (
    <li className={cx('root')}>
      {children}
    </li>
  );
};
