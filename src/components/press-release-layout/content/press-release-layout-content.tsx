import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './press-release-layout-content.module.css';

const cx = classNames.bind(styles);

export const PressReleaseLayoutContent: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
