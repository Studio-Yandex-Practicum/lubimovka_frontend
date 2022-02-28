import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './blog-entry-list-item.module.css';

interface BlogEntryListItemProps {
  children: ReactNode | ReactNode[],
}

const cx = classNames.bind(styles);

export const BlogEntryListItem = (props: BlogEntryListItemProps) => {
  const { children } = props;

  return (
    <li className={cx('root')}>
      {children}
    </li>
  );
};
