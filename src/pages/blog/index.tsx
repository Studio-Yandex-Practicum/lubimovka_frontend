import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
import { SectionGridForBlog } from 'components/section-grid-for-blog/section-grid-for-blog';
import { MessageBox } from 'components/message-box';
import { PaginatedBlogItemListList } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { BlogItem } from 'shared/types';

interface IBlogProps {
  metaTitle: string;
}
const Blog: NextPage<IBlogProps> = (props: IBlogProps) => {
  const { metaTitle } = props;

  const [blogs, setBlogs] = useState<Array<BlogItem> | undefined>(undefined);
  const [limit, setLimit] = useState<number>(10);

  const fetchBlogList = async (limit: number) => {
    let data;
    try {
      data = await fetcher<PaginatedBlogItemListList>(`/blog?limit=${limit}`);
    } catch (error) {
      return;
    }
    return data;
  };

  const checkPosition = useCallback(() => {

    const height = document.body.offsetHeight;
    const heightFooter = document.querySelector('footer')?.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    let position = scrolled + screenHeight;
    if (heightFooter)
      position += heightFooter;

    if (position >= threshold) {
      if (blogs !== undefined && blogs?.length >= limit)
        setLimit(limit + 10);
    }
  }, [limit, blogs]);

  useEffect(() => {
    const ac = new AbortController();
    fetchBlogList(limit)
      .then(data => {
        setBlogs(data?.results);
      })
      .catch(err => alert(`err: ${err}`));
    return () => ac.abort();
  }, [limit]);

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [checkPosition]);

  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <SectionTitleForBlog email='critics@lubimovka.ru' setBlogs={setBlogs}/>
      <SectionGridForBlog blogs={blogs}/>
      {blogs !== undefined && blogs.length < 1 &&
        <MessageBox message='За этот период времени ничего не найдено. Попробуйте изменить запрос.'/>
      }
    </AppLayout>
  );
};

export default Blog;

// const fetchBlogList = async (limit: number, offset: number) => {
//   let data;
//   try {
//     data = await fetcher<PaginatedBlogItemListList>(`/blog?limit=${limit}&offset=${offset}`);
//   } catch (error) {
//     return;
//   }
//   return data;
// };

// export const getServerSideProps: GetServerSideProps<PaginatedBlogItemListList> = async () => {

//   const blogList = await fetchBlogList(1, 0);

//   if (!blogList) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       ...blogList
//     },
//   };
// };

// export default Blog;
