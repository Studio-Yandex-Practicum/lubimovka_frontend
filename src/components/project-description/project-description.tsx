import classNames from 'classnames/bind';

import styles from './project-description.module.css';

interface IProjectDescriptionProps {
  children: string,
}

const cx = classNames.bind(styles);

export const ProjectDescription = ({ children }: IProjectDescriptionProps): JSX.Element => {

  return (
    <section className={cx('container')}>
      <h2 className={cx('title')}>О проекте</h2>
      <p className={cx('desc')}>{children}</p>
    </section>
  );
};
