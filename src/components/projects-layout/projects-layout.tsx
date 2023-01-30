import classNames from 'classnames/bind';

import { ProjectsLayoutHeadline } from './headline';
import { ProjectsLayoutList } from './list';

import type { ReactNode } from 'react';

import styles from './projects-layout.module.css';

interface IProjectsLayoutProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ProjectsLayout = (props: IProjectsLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <main className={cx('layout')}>
      {children}
    </main>
  );
};

ProjectsLayout.Headline = ProjectsLayoutHeadline;
ProjectsLayout.List = ProjectsLayoutList;
