import cn from 'classnames';

import type { FC, ReactNode } from 'react';

import style from './mission-text-item.module.css';

interface TextItemProps {
  number: string
  title: string
  children: ReactNode
}

const TextItem: FC<TextItemProps> = (props) => {
  const { number, title, children } = props;

  return (
    <article className={style.article}>
      <p className={cn(style.paragraph, style.numberBox)}>
        {number}
      </p>
      <h3 className={style.title}>
        {title}
      </h3>
      <div className={style.textBox}>
        {children}
      </div>
    </article>
  );
};

export default TextItem;
