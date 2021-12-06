import { FC } from 'react';
import classNames from 'classnames/bind';

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
