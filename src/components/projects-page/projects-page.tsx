import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './projects-page.module.css';

interface IProjectsPageProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ProjectsPage = (props: IProjectsPageProps): JSX.Element => {
  const { children } = props;

  return (
    <main className={cx('layout')}>
      <h1 className={cx('title')}>Проекты Любимовки</h1>
      <div className={cx('projectList')}>
        {children}
      </div>
    </main>
  );
};
