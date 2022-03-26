import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './press-release-layout-cover.module.css';

const cx = classNames.bind(styles);

export const PressReleaseLayoutCover: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
