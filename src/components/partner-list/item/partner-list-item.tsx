import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from './partner-list-item.module.css';

const cx = classNames.bind(style);

export const PartnerListItem: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <li className={cx('root')}>
      {children}
    </li>
  );
};
