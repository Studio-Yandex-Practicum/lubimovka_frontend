import { FC } from 'react';
import classname from 'classnames/bind';

import { Icon } from '../icon/icon';

import styles from './project.module.css';

const cn = classname.bind(styles);

interface IProjectProps {
  data: {
    imgUrl: string;
    imgAlt: string;
    title: string;
    text: string;
  }
}

const Project: FC<IProjectProps> = (props) => {
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
        <div className={cn('title')}>
          <span className={cn('titleText')}>
            {title}
          </span>
          <span className={cn('titleArrow')}>
            <Icon glyph="arrow-right" fill='#000' focusable="false" />
          </span>
        </div>
        <article
          className={cn('text')}
        >
          {text}
        </article>
      </div>
    </li>
  );
};

export default Project;
