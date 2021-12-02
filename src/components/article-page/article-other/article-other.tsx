import React from 'react';
import cn from 'classnames/bind';

import { BlogList } from '../../ui/blog-card/list';
import { BlogCard } from '../../ui/blog-card';
import { BlogItem, NewsItem } from '../types/article-types';
import { NewsList } from '../../news-page/news-list';

import styles from './article-other.module.css';

const cx = cn.bind(styles);

interface IArticleOtherProps {
  isBlog: boolean;
  blogArticle?: BlogItem[];
  newsArticle?: NewsItem[];
}

export const ArticleOther: React.FC<IArticleOtherProps> = (props) => {
  const {
    isBlog,
    blogArticle = [],
    newsArticle = [],
  } = props;

  return (
    <section className={cx('container', { newsListContainer: newsArticle.length > 0 })}>
      <h2 className={cx('sectionTitle', { newsListTitle: newsArticle.length > 0 })}>Другие {isBlog ? 'записи' : 'новости'}</h2>
      {isBlog ?
        <BlogList>
          {blogArticle.map(item => (
            <BlogCard
              key={item.id}
              image={item.image}
              author={item.author_url_title}
              heading={item.title}
              description={item.description}
              id={item.id}
            />
          ))}
        </BlogList>:
        <NewsList newsCardData={newsArticle} className={cx('newsList')}/>
      }

    </section>
  );
};
