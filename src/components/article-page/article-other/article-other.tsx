import React from 'react';

import cn from 'classnames/bind';

import styles from './article-other.module.css';
import { BlogList } from '../../ui/blog-card/list';
import { BlogCard } from '../../ui/blog-card';
import { BlogItem } from '../types/article-types';

const cx = cn.bind(styles);

interface IArticleOtherProps {
  isBlog: boolean;
  blogArticles?: BlogItem[];
  // newsArticles?: NewsItem[];
}

const ArticleOther: React.FC<IArticleOtherProps> = (props) => {
  const {
    isBlog,
    blogArticles = [],
    // newsArticles = [],
  } = props;

  return (
    <section className={cx('container')}>
      <h2 className={cx('sectionTitle')}>Другие {isBlog ? 'записи' : 'новости'}</h2>
      {isBlog ?
        <BlogList>
          {blogArticles.map(item => (
            <BlogCard
              key={item.id}
              image={item.image}
              author={item.author_url_title}
              heading={item.title}
              description={item.description}
              link='этого пропса не будет, ссылка будет генериться из id'
            />
          ))}
        </BlogList>:
        <p>тут будет список новостей</p>
      }

    </section>
  );
};

export default ArticleOther;