import classNames from 'classnames/bind';
import { Url } from 'shared/types/common';

import styles from './project-header.module.css';

import { Button } from '../ui/button';

interface IProjectHeaderProps {
  data: {
    title: string,
    desc: string,
    descAddon?: string,
    image: Url,
    imageDesc?: string,
  };
}

const cx = classNames.bind(styles);

export const ProjectHeader = ({ data }: IProjectHeaderProps): JSX.Element => {
  const { title, desc, descAddon, image, imageDesc } = data;

  return (
    <div className={cx('container')}>
      <Button
        view='primary'
        width='120px'
        className={cx('button')}
        align='end'
        size='s'
        iconPlace='right'
        icon='arrow-left'
        label='Проекты'
        border='bottomRight'
        isLink={true}
        /* href={} */
      />
      <h1 className={cx('title')}>{title}</h1>
      <p className={cx('desc')}>{desc}<span className={cx('desc-addon')}> {descAddon}</span></p>
      <img
        src={image}
        alt={imageDesc}
        className={cx('image')}
      />
    </div>
  );
};
