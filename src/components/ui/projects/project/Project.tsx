import { FC } from 'react';
import cn from 'classnames';

import styles from './Project.module.css';

interface ProjectProps {
  data: {
    imgUrl: string;
    imgAlt: string;
    title: string;
    text: string;
  }
}

const Project: FC<ProjectProps> = (props) => {
  const {
    imgUrl,
    imgAlt,
    title,
    text,
  } = props.data;

  return (
    <li
      className={cn(styles.card)}
    >
      <div className={cn(styles.imgContainer)}>
        <img className={cn(styles.image)} src={imgUrl} alt={imgAlt} />
      </div>
      <div className={cn(styles.textContainer)}>
        <h2 lang="ru" className={cn(styles.title)}>
          {title}
        </h2>
        <article
          className={cn(styles.text)}
        >
          {text}
        </article>
      </div>
    </li>
  );
};

export default Project;
