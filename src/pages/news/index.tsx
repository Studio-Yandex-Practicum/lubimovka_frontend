import { NextPage } from 'next';

import AppLayout from 'components/app-layout/index';
import { NewsPage } from 'components/news-page';
import { useEffect, useState } from 'react';
import { NewsItemList, PaginatedNewsItemListList } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { NewsList } from 'components/news-page/news-list';

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
        console.log(data?.results);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(news)
  return (
    <AppLayout>
      <NewsPage metaTitle={metaTitle} setNews={setNews} news={news || []} />
    </AppLayout>
  );
};

export default News;
