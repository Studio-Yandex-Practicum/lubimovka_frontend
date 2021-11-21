import classNames from 'classnames/bind';
import { Url } from 'shared/types/common';
import { Button } from 'components/ui/button';

import styles from './project-header.module.css';

interface IProjectHeaderProps {
  title: string;
  intro: string;
  image: Url;
  imageDesc?: string;
}

const cx = classNames.bind(styles);

export const ProjectHeader = (props: IProjectHeaderProps): JSX.Element => {
  const { title, intro, image, imageDesc } = props;

  return (
    <section className={cx('container')}>
      <Button
        size="s"
        iconPlace="right"
        icon="arrow-left"
        label="Проекты"
        border="bottomRight"
        className={cx('button')}
      />
      <h1 className={cx('title')}>{title}</h1>
      <p className={cx('intro')}>{intro}</p>
      <img
        src={image}
        alt={imageDesc || 'Изображение шапки проекта'}
        className={cx('image')}
      />
    </section>
  );
};
