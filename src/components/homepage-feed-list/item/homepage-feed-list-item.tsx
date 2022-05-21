import classNames from 'classnames/bind';

import styles from './homepage-feed-list-item.module.css';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const HomepageFeedListItem: FC = (props) => {
  const { children } = props;

  return (
    <li className={cx('root')}>
      {children}
    </li>
  );
};
