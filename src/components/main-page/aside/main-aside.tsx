import { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from 'components/ui/button';
import { BlogCard } from '../../ui/blog-card';
import { MainNews } from 'components/main-page/news';

import styles from './main-aside.module.css';
import data from '../assets/mock-data.json';

const cx = cn.bind(styles);

export const MainAside: FC = () => {
  const { title, buttonText, buttonLink, blogData } = data.aside;
  return (
    <aside className={cx('aside')}>
      <div className={cx('heading')}>
        <h2 className={cx('title')}>{title}</h2>
        <div className={cx('buttonContainer')}>
          <Button
            label={buttonText}
            isLink
            href={buttonLink}
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
        {/* {blogData &&
          blogData.map((blogCard, i) => (
            <li key={i}>
              <BlogCard
                image={blogCard.image}
                author={blogCard.author}
                heading={blogCard.heading}
                description={blogCard.description}
                id={blogCard.id}
              />
            </li>
          ))} */}
        <li>
          {<MainNews/>}
          {<MainNews/>}
        </li>
      </ul>
    </aside>
  );
};
