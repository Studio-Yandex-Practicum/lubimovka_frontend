import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { BlogCard } from '../../ui/blog-card';
import { Banner } from 'api-typings';

import styles from './main-aside.module.css';

const cx = cn.bind(styles);

interface IMainAside {
  title: string
  items: Array<Banner>;
}

// author_url: "http://kotov.production"
// author_url_title: "Сергей Котов"
// description: "Описание 3"
// id: 37
// image: "https://lubimovka.kiryanov.ru/media/images/articles/blogitems/giphy_PJxObfG.gif"
// pub_date: "2021-12-19T18:48:00" - даты нету
// title: "Заголовок 3"

export const MainAside: FC<IMainAside> = ({ title, items }) => {
  return (
    <section className={cx('container')}>
      <aside className={cx('aside')}>
        <div className={cx('heading')}>
          <h2 className={cx('title')}>{title}</h2>
          <div className={cx('buttonContainer')}>
            <Button
              label="Все записи"
              isLink
              href="/blog"
              width="100%"
              border="bottomLeft"
              iconPlace="left"
              icon="arrow-right"
              align="start"
              gap="9px"
              size="s"
            />
          </div>
        </div>

        <ul className={cx('list')}>
          {items &&
          items.map((item) => (
            <li key={item.id}>
              <BlogCard
                image={item.image}
                author={item.author_url_title}
                heading={item.title}
                description={item.description}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
