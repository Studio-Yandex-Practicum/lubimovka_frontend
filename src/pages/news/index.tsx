import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState, useCallback } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { NewsPage } from 'components/news-page';
import { NewsItemList, PaginatedNewsItemListList } from 'api-typings';
import { fetcher } from 'shared/fetcher';


interface INewsProps {
  metaTitle: string;
}
const News: NextPage<INewsProps> = (props: INewsProps) => {
  const {
    metaTitle,
  } = props;

  const [news, setNews] = useState<Array<NewsItemList> | undefined>();
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);



  const fetchNewsList = async (limit: number) => {
    let data;
    try {
      data = await fetcher<PaginatedNewsItemListList>(`/news/?limit=${limit}&offset=${offset}`);
    } catch (error) {
      return;
    }
    return data;
  };

  const scrollHandler = useCallback(() => {

    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
      if (news !== undefined && news?.length >= limit) {
        setLimit(prevState => prevState + 10);
        setOffset(prevState => prevState + 10);
      }
    }


  }, [limit, news, offset]);


  useEffect(() => {
    fetchNewsList(limit)
      .then(data => {
        setNews(data?.results);
      })
      .catch(error => error);
  }, [limit]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [scrollHandler])


  return (
    <AppLayout>
      <NewsPage metaTitle={metaTitle} setNews={setNews} news={news || []} />
    </AppLayout>
  );

};


export default News;

