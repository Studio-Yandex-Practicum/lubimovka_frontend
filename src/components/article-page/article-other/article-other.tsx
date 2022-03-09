import cn from 'classnames/bind';

import { BlogCard } from 'components/ui/blog-card';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/ui/news-card';
import { BlogItem, NewsItem } from 'shared/types';

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
      <h2 className={cx('sectionTitle', { newsListTitle: newsArticle.length > 0 })}>
        Другие {blogArticle.length > 0 ? 'записи' : 'новости'}
      </h2>
      {blogArticle.length > 0 ?
        <>
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
        </> : (
          // TODO: отрефакторить страницу новости/записи блога. Разделить рендеринг. Избавиться от модальности. Избавиться от нейминга API в компонентах.
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
