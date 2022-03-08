import React from 'react';
import cn from 'classnames/bind';

import { BlogList } from '../../ui/blog-card/list';
import { BlogCard } from '../../ui/blog-card';
import { BlogItem, NewsItem } from '../../../shared/types';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/ui/news-card';

import styles from './article-other.module.css';

const cx = cn.bind(styles);

interface IArticleOtherProps {
  blogArticle?: BlogItem[];
  newsArticle?: NewsItem[];
}

export const ArticleOther: React.FC<IArticleOtherProps> = (props) => {
  const {
    blogArticle = [],
    newsArticle = [],
  } = props;

  return (
    <section className={cx('container', { newsListContainer: newsArticle.length > 0 })}>
      <h2 className={cx('sectionTitle', { newsListTitle: newsArticle.length > 0 })}>Другие {blogArticle.length > 0 ? 'записи' : 'новости'}</h2>
      {blogArticle.length > 0 ?
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
        </BlogList> : (
          // TODO: отрефакторить страницу новости/записи блога. Разделить рендеринг. Избавиться от модальности.
          <NewsList
            className={cx('list')}
          >
            {newsArticle.map((entry) => (
              <NewsList.Item key={entry.id}>
                <NewsCard
                  newsId={entry.id}
                  title={entry.title}
                  description={entry.description}
                  date={entry.pub_date}
                  isMainPage={false}
                />
              </NewsList.Item>
            ))}
          </NewsList>
        )
      }

    </section>
  );
};
