import classNames from 'classnames/bind';

import { AuthorListItem } from './item';

import type { FC } from 'react';

import styles from './author-list.module.css';

const cx = classNames.bind(styles);

const Component: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <ul className={cx('root')}>
      {children}
    </ul>
  );
};

export const AuthorList = Object.assign(Component, {
  Item: AuthorListItem,
});
