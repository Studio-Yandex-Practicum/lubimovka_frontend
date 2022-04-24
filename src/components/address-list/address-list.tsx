import classNames from 'classnames/bind';

import { AddressListItem } from './item';

import type { ReactNode } from 'react';

import style from './address-list.module.css';

const cx = classNames.bind(style);

interface AddressListProps {
  children: ReactNode,
}

const Component = (props: AddressListProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <ul className={cx('root')}>
      {children}
    </ul>
  );
};

export const AddressList = Object.assign(Component, {
  Item: AddressListItem,
});
