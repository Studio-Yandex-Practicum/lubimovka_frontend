import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { NewsListItem } from './item';

import styles from './news-list.module.css';

interface NewsListProps {
  children: ReactNode | ReactNode[]
  className?: string
  hasMoreEntries?: boolean
  pending?:boolean
  onShouldLoadEntries?: () => void
}

const cx = classNames.bind(styles);

const Component = (props: NewsListProps) => {
  const {
    children,
    className,
  } = props;

  return (
    <ul className={cx('root', className)}>
      {children}
    </ul>
  );
};

export const NewsList = Object.assign(Component, {
  Item: NewsListItem,
});
