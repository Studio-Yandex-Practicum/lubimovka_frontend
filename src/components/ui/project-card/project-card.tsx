import Link from 'next/link';
import { FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from '../icon/icon';

import styles from './project.module.css';

const cx = classNames.bind(styles);

interface IProjectCardProps {
  data: {
    link: string;
    imgUrl: string;
    imgAlt: string;
    title: string;
    text: string;
  }
}

export const ProjectCard: FC<IProjectCardProps> = (props) => {
  const {
    link,
    imgUrl,
    imgAlt,
    title,
    text,
  } = props.data;

  return (
    <li
      className={cx('card')}
    >
      <Link href={link}>
        <div className={cx('imgContainer')}>
          <img className={cx('image')} src={imgUrl} alt={imgAlt} />
        </div>
        <div>
          <h6 className={cx('title')}>
            {title}
            <Icon className={cx('titleArrow')} glyph="arrow-right" fill='#000' focusable="false" />
          </h6>
          <p
            className={cx('text')}
          >
            {text}
          </p>
        </div>
      </Link>
    </li>
  );
};
