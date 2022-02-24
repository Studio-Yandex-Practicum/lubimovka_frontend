import { ReactNode, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './blog-entry-list-item.module.css';

interface BlogEntryListItemProps {
  children: ReactNode | ReactNode[],
}

const cx = classNames.bind(styles);

export const BlogEntryListItem = forwardRef<HTMLLIElement, BlogEntryListItemProps>((props, ref) => {
  const { children } = props;

  return (
    <li
      className={cx('root')}
      ref={ref}
    >
      {children}
    </li>
  );
});

BlogEntryListItem.displayName = 'BlogEntryListItem';
