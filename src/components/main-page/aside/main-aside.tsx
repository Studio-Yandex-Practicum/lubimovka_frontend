/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import cn from 'classnames/bind';
import { BlogItemList } from 'api-typings';

import { Button } from 'components/ui/button';
import { BlogCard } from '../../ui/blog-card';
import { MainNews } from 'components/main-page/news';

import styles from './main-aside.module.css';

const cx = cn.bind(styles);

interface IMainAside {
  type: 'blog' | 'news';
  title: string;
  items: Array<BlogItemList>;
}

// blog
// author_url: "http://greene.net/"
// author_url_title: "Колобова Полина Александровна"
// description: "Кидать советовать неожиданный факультет мотоцикл. Термин белье выдержать выдержать плод близко. Куча следовательно провал страсть райком. Что подземный низкий нож. Горький пятеро хлеб."
// id: 5
// image: "https://lubimovka.kiryanov.ru/media/images/articles/blogitems/example_OpxSu9g.jpg"
// pub_date: "2006-01-14T01:01:41"
// title: "Иной торопливый а дьявол тревога дальний эфф

// news
// description: "Кидать передо столетие еврейский угол витрина смертельный. Спалить социалистический через намерение. Что пропаганда космос собеседник. Другой даль мимо человечек очутиться тревога угроза. Девка рассуждение штаб художественный хозяйка металл."
// id: 2
// image: "https://lubimovka.kiryanov.ru/media/images/articles/newsitems/example_lJ5wCTO.jpg"
// pub_date: "1987-08-13T20:03:51"
// title: "Зарплата правый уничтожение освобождение."

export const MainAside: FC<IMainAside> = ({ type, title, items }) => {
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
};
