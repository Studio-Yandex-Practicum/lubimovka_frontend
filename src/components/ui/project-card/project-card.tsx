import Link from 'next/link';
import { FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { Url } from 'shared/types';

import styles from './project-card.module.css';

const cx = classNames.bind(styles);

export interface IProjectCardProps {
  id: number,
  title: string;
  description: string;
  image: Url;
  even?: boolean;
}

export const ProjectCard: FC<IProjectCardProps> = (props) => {
  const {
    id,
    title,
    description,
    image,
    even,
  } = props;

  return (
    <Link href={`/projects/${id}`}>
      <a className={cx('link')}>
        <article
          className={cx(
            'card',
            { even },
          )}
        >
          <div className={cx('imageContainer')}>
            <img className={cx('image')} src={image} alt={title}/>
          </div>
          <h2 className={cx('title')}>
            {title}
            <Icon className={cx('titleArrow')} glyph="arrow-right" fill="#000" focusable="false"/>
          </h2>
          <p className={cx('description')}>
            {description}
          </p>
        </article>
      </a>
    </Link>
  );
};
