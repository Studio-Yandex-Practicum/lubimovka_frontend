import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-footer.module.css';

const cx = classNames.bind(styles);

export const PageFooter: FC = (props) => {
  const { children } = props;

  return (
    <header className={cx('footer')}>
      {children}
    </header>
  );
};
