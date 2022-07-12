import classNames from 'classnames/bind';

import { PartnerListItem } from './item';

import type { FC } from 'react';

import style from './partner-list.module.css';

interface PartnerListProps {
  size?: 's' | 'm'
}

const cx = classNames.bind(style);

export const Component: FC<PartnerListProps> = (props)=> {
  const {
    size = 'm',
    children,
  } = props;

  return (
    <ul className={cx(size)}>
      {children}
    </ul>
  );
};

Component.displayName = 'PartnerList';

export const PartnerList = Object.assign(Component, {
  Item: PartnerListItem,
});
