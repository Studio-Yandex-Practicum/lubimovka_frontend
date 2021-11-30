import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { fetcher } from 'shared/fetcher';
import AppLayout from '../../components/app-layout';
import { ArticlePage } from '../../components/article-page';
import { NewsData } from '../../components/article-page/types/article-types';

const NewsArticle = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <AppLayout>
      <ArticlePage data={props}/>
    </AppLayout>
  );
};

const fetchNewsArticle = async (newsId: string) => {
  let data;

  try {
    data = await fetcher<NewsData>(`/news/${newsId}/`);
  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<NewsData, Record<'id', string>> = async ({ params }) => {
  const { id: newsId } = params!;

  const newsArticle = await fetchNewsArticle(newsId);

  if (!newsArticle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...newsArticle
    },
  };
};

export default NewsArticle;
