import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { FooterPartnerListItem } from './item';

import style from './footer-partner-list.module.css';

const cx = classNames.bind(style);

interface IFooterPartnerListProps {
  children: ReactNode,
}

export const FooterPartnerList = (props: IFooterPartnerListProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <ul className={cx('list')}>
      {children}
    </ul>
  );
};

FooterPartnerList.Item = FooterPartnerListItem;
