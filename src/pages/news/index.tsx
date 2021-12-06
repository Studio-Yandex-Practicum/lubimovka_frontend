import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { AppLayout } from 'components/app-layout/index';
import { NewsPage } from 'components/news-page';
import { NewsItemList, PaginatedNewsItemListList } from 'api-typings';
import { fetcher } from 'shared/fetcher';
// import { NewsList } from 'components/news-page/news-list';

interface INewsProps {
  metaTitle: string;
}
const News: NextPage<INewsProps> = (props: INewsProps) => {
  const {
    metaTitle,
  } = props;

  const [news, setNews] = useState<Array<NewsItemList> | undefined>();

  const fetchNewsList = async () => {
    let data;
    try {
      data = await fetcher<PaginatedNewsItemListList>('/news');
    } catch (error) {
      return;
    }
    return data;
  };

  useEffect(() => {
    fetchNewsList()
      .then(data => {
        setNews(data?.results);
        // console.log(data?.results);
      })
      .catch(error => error); //console.log(error)
  }, []);

  return (
    <AppLayout>
      <NewsPage metaTitle={metaTitle} setNews={setNews} news={news || []}/>
    </AppLayout>
  );
};

export default News;
