import classNames from 'classnames/bind';

import type { FC } from 'react';

import style from './footer-projects.module.css';

const cx = classNames.bind(style);

export const FooterProjects: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={cx('projects')}>
      {children}
    </div>
  );
};
