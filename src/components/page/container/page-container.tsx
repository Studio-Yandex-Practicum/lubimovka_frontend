import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-container.module.css';

const cx = classNames.bind(styles);

interface IPageContainerProps {
  className: string,
}

export const PageContainer: FC<IPageContainerProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={cx('container', className)}>
      {children}
    </div>
  );
};
