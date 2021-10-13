import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './person-card-list.module.css';
const cx = classNames.bind(styles);

interface IPersonCardListProps extends React.HTMLAttributes<HTMLDivElement> {
  gapLarge?: boolean;
  children: ReactNode;
}

export const PersonCardList = (props: IPersonCardListProps): JSX.Element => {
  const { gapLarge, children } = props;

  return (
    <div className={cx('personCardList')}>
      <div className={cx('grid', { gapLarge })}>
        {children}
      </div>
    </div>
  );
};
