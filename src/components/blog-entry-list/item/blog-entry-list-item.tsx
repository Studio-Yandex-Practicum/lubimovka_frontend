import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './blog-entry-list-item.module.css';

const cx = classNames.bind(styles);

export const BlogEntryListItem: FC = (props) => {
  const { children } = props;

  return (
    <li className={cx('root')}>
      {children}
    </li>
  );
};
