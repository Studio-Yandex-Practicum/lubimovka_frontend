import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './basic-play-card-list.module.css';

const cx = classNames.bind(styles);

interface IBasicPlayCardListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const BasicPlayCardList = (props: IBasicPlayCardListProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('list')}>
      {children}
    </div>
  );
};
