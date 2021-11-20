import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './blog-list.module.css';
const cx = classNames.bind(styles);

interface IBlogListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const BlogList = (props: IBlogListProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('blogList')}>
      {children}
    </div>
  );
};
