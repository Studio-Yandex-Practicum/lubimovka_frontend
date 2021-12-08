import classNames from 'classnames/bind';
import React from 'react';

import { MasonryGrid } from 'components/ui/masonry-grid/masonry-grid';
import { BlogCard } from 'components/ui/blog-card';
import { BlogItem } from 'shared/types';

import styles from './section-grid-for-blog.module.css';

const cx = classNames.bind(styles);

interface ISectionGridForBlogProps {
  blogs: Array<BlogItem> | undefined;
}
export const SectionGridForBlog = (
  props: ISectionGridForBlogProps
): JSX.Element => {
  const { blogs } = props;

  return (
    <MasonryGrid>
      {blogs?.map((blog) => {
        return (
          <li
            key={blog.id}
            className={cx('big')}
          >
            <BlogCard
              image={blog.image}
              author={blog.author_url_title}
              heading={blog.title}
              description={blog.description}
              id={blog.id}
            />
          </li>
        );
      })}
    </MasonryGrid>
  );
};
