import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import AppLayout from 'components/app-layout/index';
import MasonryGrid from 'components/ui/masonry-grid/masonry-grid';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
import { BlogCard } from 'components/ui/blog-card';

import data from './assets/mock-cardData.json';

interface IBlogProps {
  metaTitle: string;
}
const Blog: NextPage<IBlogProps> = (props: IBlogProps) => {
  const { metaTitle } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    console.log('loaded')
  }, [])

  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <SectionTitleForBlog email='critics@lubimovka.ru' />
      <MasonryGrid isLoaded={isLoaded}>
        {data.map((card) => {
          return (
            <BlogCard
              key={card.id}
              image={card.image}
              author={card.author_url_title}
              heading={card.title}
              description={card.subtitle}
              id={card.id}
              firstCardSizeMode='big'
            />
          );
        })}
      </MasonryGrid>
    </AppLayout>
  );
};

export default Blog;
