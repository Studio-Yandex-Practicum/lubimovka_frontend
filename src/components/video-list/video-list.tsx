import { ReactNode, HTMLAttributes, Children } from 'react';
import classNames from 'classnames/bind';

import styles from './video-list.module.css';

const cx = classNames.bind(styles);

interface IVideoListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode,
}

export const VideoList = (props: IVideoListProps): JSX.Element => {
  const { children } = props;
  const childrenCount = Children.count(children);

  return childrenCount > 1 ? (
    <ul className={cx('list')}>
      {Children.map(children, (child) => (
        <li className={cx('item')}>
          {child}
        </li>
      ))}
    </ul>
  ) : (
    <div className={cx('only-child')}>
      {children}
    </div>
  );
};
