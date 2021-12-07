import { FC } from 'react';
import cn from 'classnames/bind';

import style from './news-title.module.css';

const cx = cn.bind(style);

interface INewsTitle {
  title: string;
}

export const NewsTitle: FC<INewsTitle> = ({ title }) => {
  return(
    <h1 className={cx('title')}>{title}</h1>
  );
};
