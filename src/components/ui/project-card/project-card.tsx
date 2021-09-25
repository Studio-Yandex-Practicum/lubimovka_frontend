import { FC } from 'react';
import classNames from 'classnames/bind';

import { Icon } from '../icon/icon';

import styles from './project.module.css';

const cn = classNames.bind(styles);

interface IProjectCardProps {
  data: {
    imgUrl: string;
    imgAlt: string;
    title: string;
    text: string;
  }
}

export const ProjectCard: FC<IProjectCardProps> = (props) => {
  const {
    imgUrl,
    imgAlt,
    title,
    text,
  } = props.data;

  return (
    <li
      className={cn('card')}
    >
      <div className={cn('imgContainer')}>
        <img className={cn('image')} src={imgUrl} alt={imgAlt} />
      </div>
      <div>
        <h6 className={cn('title')}>
          {title}
          <Icon className={cn('titleArrow')} glyph="arrow-right" fill='#000' focusable="false" />
        </h6>
        <p
          className={cn('text')}
        >
          {text}
        </p>
      </div>
    </li>
  );
};
