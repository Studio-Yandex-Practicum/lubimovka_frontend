import { FC, ReactNode } from 'react';
import cn from 'classnames';

import style from './ideology-text-item.module.css';

interface TextItemProps {
  number: '1.1' | '1.2' | '1.3' | '2.1' | '2.2' | '2.3';
  title: string
  children: ReactNode
}

const TextItem: FC<TextItemProps> = (props) => {
  const { number, title, children } = props;

  return (
    <article className={style.article}>
      <p className={cn(style.paragraph, style.numberBox)}>{number}</p>
      <h4 className={style.title}>{title}</h4>
      <div className={style.textBox}>{children}</div>
    </article>
  );
};

export default TextItem;
