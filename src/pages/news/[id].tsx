import Error from 'next/error';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { ArticleHeadline } from 'components/article-headline';
import { ArticleFootnote } from 'components/article-footnote';
import { Share } from 'components/share';
import { ConstructorContent } from 'components/constructor-content';
import { Section } from 'components/section';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/news-card';
import { PageBreadcrumbs } from 'components/page';
import { Breadcrumb } from 'components/breadcrumb';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import { format } from 'shared/helpers/format-date';
import { notFoundResult, serverErrorResult } from 'shared/constants/server-side-props';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { NewsItemDetailed } from 'api-typings';

import styles from 'components/article-layout/article-layout.module.css';

const cx = classNames.bind(styles);

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
      <PageBreadcrumbs>
        <Breadcrumb
          text="Блог"
          path="/blog"
        />
      </PageBreadcrumbs>
      <ArticleHeadline
        variant="news"
        title={title}
        description={description}
        date={format('d MMMM yyyy', new Date(date))}
        cover={image}
      />
      <ConstructorContent
        // @ts-expect-error
        blocks={constructorBlocks}
      />
      <ArticleFootnote
        className={cx('footnote')}
        colors="brand"
        action={(
          <Share
            firstLine="Поделиться"
            secondLine="новостью в соцсетях"
            size="s"
          />
        )}
      />
      {!!suggestedNews.length && (
        <Section
          type="news"
          title="Другие новости"
        >
          <NewsList>
            {suggestedNews.map((entry) => (
              <NewsList.Item key={entry.id}>
                <NewsCard
                  title={entry.title}
                  description={entry.description}
                  date={entry.pub_date && format('d MMMM yyyy', new Date(entry.pub_date))}
                  href={`/news/${entry.id}`}
                />
              </NewsList.Item>
            ))}
          </NewsList>
        </Section>
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
