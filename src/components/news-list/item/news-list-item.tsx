import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './news-list-item.module.css';

interface NewsListItemProps {
  children: ReactNode | ReactNode[]
}

const cx = classNames.bind(styles);

export const NewsListItem = forwardRef<HTMLLIElement, NewsListItemProps>((props, ref) => {
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

NewsListItem.displayName = 'NewsListItem';
