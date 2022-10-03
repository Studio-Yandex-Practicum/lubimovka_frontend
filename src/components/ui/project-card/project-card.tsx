import Link from 'next/link';
import { FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { Url } from 'shared/types';

import styles from './project-card.module.css';

const cx = classNames.bind(styles);

export interface ProjectCardProps {
  title: string
  description: string
  image: Url
  even?: boolean
  url: string
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const {
    title,
    description,
    image,
    even,
    url,
  } = props;

  return (
    <Link href={url}>
      <a className={cx('link')}>
        <article
          className={cx(
            'card',
            { even },
          )}
        >
          <div className={cx('imageContainer')}>
            <img
              className={cx('image')}
              src={image}
              alt={title}
            />
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
