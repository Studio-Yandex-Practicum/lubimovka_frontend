import classNames from 'classnames/bind';
import format from 'date-fns/format';

import { AppLayout } from 'components/app-layout';
import { ArticleFootnote } from 'components/article-footnote';
import { ArticleHeadline } from 'components/article-headline';
import styles from 'components/article-layout/article-layout.module.css';
import { Breadcrumb } from 'components/breadcrumb';
import { ConstructorContent } from 'components/constructor-content';
import { NewsCard } from 'components/news-card';
import { NewsList } from 'components/news-list';
import { PageBreadcrumbs } from 'components/page';
import { Section } from 'components/section';
import { SEO } from 'components/seo';
import { ShareLinks } from 'components/share-links';
import { fetcher, HttpRequestError } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import type { NewsItemDetail } from '__generated__/api-typings';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const cx = classNames.bind(styles);

const NewsArticle = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          text="Новости"
          path="/news"
        />
      </PageBreadcrumbs>
      <ArticleHeadline
        variant="news"
        title={title}
        description={description}
        date={format(new Date(date), 'd MMMM yyyy')}
        cover={image}
      />
      <ConstructorContent
        // @ts-ignore: TODO
        blocks={constructorBlocks}
      />
      <ArticleFootnote
        className={cx('footnote')}
        colors="brand"
        action={(
          <ShareLinks
            firstLine="Поделиться"
            secondLine="новостью"
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
                  date={entry.pub_date && format(new Date(entry.pub_date), 'd MMMM yyyy')}
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
  const { id } = params!;
  let data;

  try {
    data = await fetcher<NewsItemDetail>(`/news/${id}/`);
  } catch (error) {
    if (error instanceof HttpRequestError) {
      switch (error.response.statusCode) {
      case 404:
        return notFoundResult;
      default:
        throw new InternalServerError();
      }
    }

    throw error;
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
