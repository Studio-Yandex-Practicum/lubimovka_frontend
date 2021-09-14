import { FC } from 'react';
import cn from 'classnames';

import styles from './Articles-text.module.css';

interface ArticlesTextProps {
  content: string[]
}

export const ArticlesText: FC<ArticlesTextProps> = ({ content }) => {
  return (
    <>
      {content.map((el, index) => (
        <p key={index} className={cn(styles.text)}>{el}</p>
      ))}
    </>
  );
};
