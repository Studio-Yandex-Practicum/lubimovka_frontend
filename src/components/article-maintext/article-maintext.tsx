import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './article-maintext.module.css';
const cx = classNames.bind(styles);

export interface IArticleMainTextProps extends React.HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
}

export const ArticleMainText: React.FC<IArticleMainTextProps> = (props) => {
  const { children } = props;

  return (
    <section className={cx('section')}>
      <article className={cx('article_container')}>
        {children}
      </article>
    </section>
  );
};
