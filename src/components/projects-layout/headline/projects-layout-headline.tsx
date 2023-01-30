import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './projects-layout-headline.module.css';

const cx = classNames.bind(styles);

export const ProjectsLayoutHeadline: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('headline')}>
      {children}
    </div>
  );
};
