import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from './project-card-list-item.module.css';

const cx = classNames.bind(style);

export const ProjectCardListItem: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <li className={cx('item')}>
      {children}
    </li>
  );
};
