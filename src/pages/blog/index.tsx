import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useState, useEffect, useCallback } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
import { SectionGridForBlog } from 'components/section-grid-for-blog/section-grid-for-blog';
import { MessageBox } from 'components/message-box';
import { PaginatedBlogItemListList } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { BlogItem } from 'shared/types';

const LIMIT = 1;

const Blog = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [blogs, setBlogs] = useState<Array<BlogItem> | undefined>(props.results);
  const [offset, setOffset] = useState<number>(LIMIT);

  const checkPosition = useCallback(() => {
    const height = document.body.offsetHeight;
    const heightFooter = document.querySelector('footer')?.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 3;
    let position = scrolled + screenHeight;
    if (heightFooter)
      position += heightFooter;
    if (position >= threshold && blogs !== undefined) {
      setOffset(blogs?.length);
    }
  }, [blogs]);

  const fetchBlogList = async (limit: number, offset: number, signal: AbortSignal = new AbortController().signal) => {
    let data;
    try {
      data = await fetcher<PaginatedBlogItemListList>(`/blog?limit=${limit}&offset=${offset}`, { signal: signal });
    } catch (error) {
      return;
    }
    return data;
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchBlogList(LIMIT, offset, abortController.signal)
      .then(data => {
        if (data !== undefined) {
          const results = data?.results;
          setBlogs(bl => {
            if (!bl && !results)
              return [];
            if (!bl)
              return results;
            if (!results)
              return bl;

            return bl.concat(results);
          });
        }
      })
      .catch(error => error);
    return () => {
      abortController.abort();
    };
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [checkPosition]);

  return (
    <AppLayout>
      <SectionTitleForBlog email='critics@lubimovka.ru' setBlogs={setBlogs}/>
      <SectionGridForBlog blogs={blogs}/>
      {blogs !== undefined && blogs.length < 1 &&
        <MessageBox message='За этот период времени ничего не найдено. Попробуйте изменить запрос.'/>
      }
    </AppLayout>
  );
};

const fetchBlogListPrimary = async (limit: number) => {
  let data;
  try {
    data = await fetcher<PaginatedBlogItemListList>(`/blog?limit=${limit}&offset=0`);
  } catch (error) {
    return;
  }
  return data;
};

export const getServerSideProps: GetServerSideProps<PaginatedBlogItemListList> = async () => {
  const blogList = await fetchBlogListPrimary(LIMIT);

  if (!blogList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...blogList
    },
  };
};

export default Blog;
