import { FC } from 'react';
import cn from 'classnames';
import { Icon } from '../../icon/icon';

import styles from './Project.module.css';

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
      className={cn(styles.card)}
    >
      <div className={cn(styles.imgContainer)}>
        <img className={cn(styles.image)} src={imgUrl} alt={imgAlt} />
      </div>
      <div className={cn(styles.textContainer)}>
        <div className={cn(styles.title)}>
          <span className={cn(styles.titleText)}>
            {title}
          </span>
          <span className={cn(styles.titleArrow)}>
            <Icon glyph="arrow-right" fill='#000' focusable="false" />
          </span>
        </div>
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
