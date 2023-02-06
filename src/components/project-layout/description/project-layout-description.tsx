import classNames from 'classnames/bind';

import { ProjectLayoutStorey } from '../storey';

import styles from './project-layout-description.module.css';

interface IProjectLayoutDescriptionProps {
  children: string
}

const cx = classNames.bind(styles);

export const ProjectLayoutDescription = ({ children }: IProjectLayoutDescriptionProps): JSX.Element => {

  return (
    <ProjectLayoutStorey type="description">
      <section>
        <h2 className={cx('title')}>
          О проекте
        </h2>
        <p className={cx('text')}>
          {children}
        </p>
      </section>
    </ProjectLayoutStorey>
  );
};
