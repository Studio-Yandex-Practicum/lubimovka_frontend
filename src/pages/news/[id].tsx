import Error from 'next/error';

import { AppLayout } from 'components/app-layout';
import ArticleTitle from 'components/article-page/article-title';
import { ArticleOther } from 'components/article-page/article-other';
import { ConstructorContent } from 'components/constructor-content';
import { SEO } from 'components/seo';
import { fetcher } from 'shared/fetcher';
import { notFoundResult, serverErrorResult } from 'shared/constants/server-side-props';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { NewsItemDetailed } from 'api-typings';

const NewsArticle = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if ('errorCode' in props) {
    return (
      <Error statusCode={props.errorCode}/>
    );
  }

  const {
    title,
    description,
    image,
    date,
    constructorBlocks,
    suggestedNews,
  } = props;

  return (
    <AppLayout>
      <SEO
        title={title}
        description={description}
      />
      <ArticleTitle
        title={title}
        description={description}
        date={date}
        imgLink={image}
      />
      <ConstructorContent
        // @ts-expect-error
        blocks={constructorBlocks}
      />
      {suggestedNews && (
        <ArticleOther
          newsArticle={suggestedNews}
        />
      )}
    </AppLayout>
  );
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'id', string>>) => {
  if (!params) {
    return serverErrorResult;
  }

  const { id } = params;
  let data: NewsItemDetailed;

  try {
    data = await fetcher<NewsItemDetailed>(`/news/${id}/`);
  } catch {
    return notFoundResult;
  }

  return {
    props: {
      title: data.title,
      description: data.description,
      image: data.image,
      date: data.pub_date,
      constructorBlocks: data.contents,
      suggestedNews: data.other_news,
    },
  };
};

export default NewsArticle;
