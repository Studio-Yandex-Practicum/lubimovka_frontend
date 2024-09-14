import classNames from 'classnames/bind';

import { ProjectLayoutStorey } from '../storey';

import styles from './project-layout-description.module.css';

interface IProjectLayoutDescriptionProps {
  descriptionCaption: string
  description: string
}

const cx = classNames.bind(styles);

export const ProjectLayoutDescription = ({ descriptionCaption, description }: IProjectLayoutDescriptionProps): JSX.Element => {

  return (
    <ProjectLayoutStorey type="description">
      <section>
        <h2 className={cx('title')}>
          {descriptionCaption}
        </h2>
        <p className={cx('text')}>
          {description}
        </p>
      </section>
    </ProjectLayoutStorey>
  );
};
