import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
import { SectionGridForBlog } from 'components/section-grid-for-blog/section-grid-for-blog';

interface IBlogProps {
  metaTitle: string;
}
const Blog: NextPage<IBlogProps> = (props: IBlogProps) => {
  const { metaTitle } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <SectionTitleForBlog email='critics@lubimovka.ru'/>
      <SectionGridForBlog isLoaded={isLoaded}/>
    </AppLayout>
  );
};

export default Blog;
