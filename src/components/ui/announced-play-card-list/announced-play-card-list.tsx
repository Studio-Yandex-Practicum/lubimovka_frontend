import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './announced-play-card-list.module.css';
const cx = classNames.bind(styles);

interface IAnnouncedPlayCardListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AnnouncedPlayCardList = (props: IAnnouncedPlayCardListProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('list')}>
      {children}
    </div>
  );
};
