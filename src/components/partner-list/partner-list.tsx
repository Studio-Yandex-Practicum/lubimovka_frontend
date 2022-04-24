import classNames from 'classnames/bind';

import { PartnerListItem } from './item';

import type { FC } from 'react';

import style from './partner-list.module.css';

const cx = classNames.bind(style);

export const Component: FC = (props)=> {
  const {
    children,
  } = props;

  return (
    <ul className={cx('list')}>
      {children}
    </ul>
  );
};

Component.displayName = 'PartnerList';

export const PartnerList = Object.assign(Component, {
  Item: PartnerListItem,
});
