import { FC } from 'react';
import classNames from 'classnames/bind';

import { NewsItemList, BlogItemList } from 'api-typings';
import { Button } from 'components/ui/button';
import { BlogCard } from 'components/ui/blog-card';
import { MainNews } from 'components/main-page/news';

import styles from './main-aside.module.css';

const cx = classNames.bind(styles);

interface IMainAside extends BlogItemList {
  type: 'blog' | 'news';
  title: string;
  items: Array<NewsItemList>;
}

export const MainAside: FC<IMainAside> = ({ type, title, items }) => (
  <section className={cx('container')}>
    <aside className={cx('aside')}>
      <div className={cx('heading')}>
        <h2 className={cx('title')}>{title}</h2>
        <div className={cx('buttonContainer')}>
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
        {items &&
          items.map((item) => (
            <li key={item.id} className={cx('item')}>
              {
                type === 'blog' ?
                  <BlogCard
                    image={item.image}
                    author={item.author_url_title}
                    heading={item.title}
                    description={item.description}
                    id={item.id}
                  />
                  : <MainNews
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    pub_date={item.pub_date}
                  />}
            </li>
          ))}
      </ul>
    </aside>
  </section>
);
