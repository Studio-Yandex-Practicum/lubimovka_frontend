import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './project-layout.module.css';

interface IProjectLayoutProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ProjectLayout = (props: IProjectLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <main className={cx('layout')}>
      {children}
    </main>
  );
};
