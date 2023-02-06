import classNames from 'classnames/bind';

import type { ReactNode } from 'react';

import styles from './person-card-list.module.css';

const cx = classNames.bind(styles);

interface IPersonCardListProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded?: boolean
  children: ReactNode
}

export const PersonCardList = (props: IPersonCardListProps): JSX.Element => {
  const { expanded, children } = props;

  return (
    <div className={cx('personCardList', { expanded })}>
      {children}
    </div>
  );
};
