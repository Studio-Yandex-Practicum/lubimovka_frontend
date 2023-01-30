import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './projects-layout-list.module.css';

const cx = classNames.bind(styles);

export const ProjectsLayoutList: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('list')}>
      {children}
    </div>
  );
};
