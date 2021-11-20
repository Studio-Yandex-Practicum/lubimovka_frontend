import React, {ReactNode} from 'react';

import cn from 'classnames/bind';

import styles from './article-other.module.css';
import {BlogList} from '../../ui/blog-card/list';
import {BlogCard, BlogCardProps} from '../../ui/blog-card';

const cx = cn.bind(styles);

interface IArticleOtherProps {
  isBlog: boolean;
  blogArticles?: ReactNode;
  newsArticles?: ReactNode;
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
      {isBlog ?
        <BlogList>
          {(blogArticles as BlogCardProps[]).map((item, idx) => (
            <BlogCard key={idx} {...item}/>
          ))}
        </BlogList>:
        <p>тут будет список новостей</p>
      }

    </section>
  );
};

export default ArticleOther;
