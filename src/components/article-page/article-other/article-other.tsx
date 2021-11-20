import React from 'react';

import cn from 'classnames/bind';

import styles from './article-other.module.css';

const cx = cn.bind(styles);

interface IArticleOtherProps {
  isBlog: boolean;
  blogArticles?: string[];
  newsArticles?: string[];
}

const ArticleOther: React.FC<IArticleOtherProps> = (props) => {
  const {
    isBlog,
    blogArticles = [],
    newsArticles = [],
  } = props;

  return (
    <section className={cx('container')}>
      <h2 className={cx('sectionTitle')}>Другие {isBlog ? 'записи' : 'новости'}</h2>

    </section>
  );
};

export default ArticleOther;
