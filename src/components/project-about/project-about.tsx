import classNames from 'classnames/bind';

import styles from './project-about.module.css';

interface IProjectAboutProps {
  data: {
    title: string,
    desc: string,
  };
}

const cx = classNames.bind(styles);

export const ProjectAbout = ({ data }: IProjectAboutProps): JSX.Element => {
  const { title, desc } = data;

  return (
    <section className={cx('container')}>
      <h2 className={cx('title')}>{title}</h2>
      <p className={cx('desc')}>{desc}</p>
    </section>
  );
};
