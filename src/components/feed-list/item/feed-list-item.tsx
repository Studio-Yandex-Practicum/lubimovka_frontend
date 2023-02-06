import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './feed-list-item.module.css';

const cx = classNames.bind(styles);

export const FeedListItem: FC = (props) => {
  const { children } = props;

  return (
    <li className={cx('root')}>
      {children}
    </li>
  );
};
