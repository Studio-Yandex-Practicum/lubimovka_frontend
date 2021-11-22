import {FC} from 'react';
import cn from 'classnames';

import style from './news-title.module.css';

interface INewsTitle {
  title: string;
}

export const NewsTitle: FC<INewsTitle> = ({title}) => {
  return(
    <h1 className={cn(style.title)}>{title}</h1>
  );
};
