import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './project-page.module.css';

interface IProjectPageProps {
  children: ReactNode;
}

const cx = classNames.bind(styles);

export const ProjectPage = (props: IProjectPageProps): JSX.Element => {
  const { children } = props;

  return (
    <main className={cx('page')}>
      {children}
    </main>
  );
};
