import classNames from 'classnames/bind';
import React from 'react';

import MasonryGrid from 'components/ui/masonry-grid/masonry-grid';
import { BlogCard } from 'components/ui/blog-card';

import styles from './section-grid-for-blog.module.css';
import data from './assets/mock-cardData.json';

const cx = classNames.bind(styles);

interface ISectionGridForBlogProps {
  isLoaded: boolean;
}
export const SectionGridForBlog = (
  props: ISectionGridForBlogProps
): JSX.Element => {
  const { isLoaded } = props;

  return (
    <MasonryGrid isLoaded={isLoaded}>
      {data.map((card) => {
        return (
          <li
            key={card.id}
            className={cx('big')}
          >
            <BlogCard
              image={card.image}
              author={card.author_url_title}
              heading={card.title}
              description={card.description}
              id={card.id}
            />
          </li>
        );
      })}
    </MasonryGrid>
  );
};
