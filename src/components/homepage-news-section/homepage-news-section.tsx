import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';
import { BlogCard } from 'components/ui/blog-card';
import { MainNews } from 'components/main-page/news';

import type { FC } from 'react';
import type { BlogItemList } from 'api-typings'; // TODO: избавиться от использования типов ответов API

import styles from './homepage-news-section.module.css';

const cx = classNames.bind(styles);

interface HomepageNewsSectionProps {
  type: 'blog' | 'news';
  title: string;
  items: Array<BlogItemList>;
}

export const HomepageNewsSection: FC<HomepageNewsSectionProps> = ({ type, title, items }) => (
  <section className={cx('root')}>
    <div className={cx('heading')}>
      <h2 className={cx('title')}>
        {title}
      </h2>
      <div className={cx('action')}>
        <Button
          label="Все записи"
          isLink
          href={type === 'blog' ? '/blog' : '/news'}
          width="100%"
          border="bottomLeft"
          iconPlace="left"
          icon="arrow-right"
          align="start"
          size="s"
          className={cx('icon')}
        />
      </div>
    </div>

    <ul className={cx('list')}>
      {items && items.map((item) => (
        <li key={item.id} className={cx('item')}>
          {
            type === 'blog'
              ? (
                <BlogCard
                  image={item.image}
                  author={item.author_url_title}
                  heading={item.title}
                  description={item.description}
                  id={item.id}
                />
              )
              : (
                <MainNews
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  pub_date={item.pub_date}
                />
              )}
        </li>
      ))}
    </ul>
  </section>
);
