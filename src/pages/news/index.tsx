import { useEffect, useState, useCallback } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AppLayout } from 'components/app-layout/index';
import { NewsPage } from 'components/news-page';
import { NewsItemList, PaginatedNewsItemListList } from 'api-typings';
import { fetcher } from 'shared/fetcher';

const News = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [news, setNews] = useState<Array<NewsItemList> | undefined>(props.results);
  const [offset, setOffset] = useState<number>(0);

  const scrollHandler = useCallback(() => {

    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 3;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
      if (news !== undefined && news?.length >= offset) {
        setOffset(offset + 12);
        // console.log('scroll');
      }
    }

  }, [news, offset]);

  useEffect(() => {
    fetchNewsList(12, offset)
      .then(data => {
        setNews(data?.results);

      })
      .catch(error => error);
  }, [offset]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <AppLayout>
      <NewsPage
        setNews={setNews}
        news={news || []}
      />
    </AppLayout>
  );
};

const fetchNewsList = async (limit: number, offset: number) => {
  let data;
  try {
    data = await fetcher<PaginatedNewsItemListList>(`/news/?limit=${limit}&offset=${offset}`);
  } catch (error) {
    return;
  }
  return data;
};

export const getServerSideProps: GetServerSideProps<PaginatedNewsItemListList> = async () => {

  const newsList = await fetchNewsList(12, 0);

  if (!newsList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...newsList
    },
  };
};

export default News;
