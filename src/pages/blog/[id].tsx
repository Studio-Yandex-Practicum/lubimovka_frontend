import classNames from 'classnames/bind';
import format from 'date-fns/format';

import { AppLayout } from 'components/app-layout';
import { ArticleCreditsList } from 'components/article-credits-list';
import { ArticleFootnote } from 'components/article-footnote';
import { ArticleHeadline } from 'components/article-headline';
import styles from 'components/article-layout/article-layout.module.css';
import { BlogEntryCard } from 'components/blog-entry-card';
import { BlogEntryList } from 'components/blog-entry-list';
import { Breadcrumb } from 'components/breadcrumb';
import { ConstructorContent } from 'components/constructor-content';
import { PageBreadcrumbs } from 'components/page';
import { Section } from 'components/section';
import { SEO } from 'components/seo';
import { ShareLinks } from 'components/share-links';
import { fetcher } from 'services/fetcher';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import type { BlogItemDetailOutput } from '__generated__/api-typings';
import type { GetServerSidePropsContext,InferGetServerSidePropsType } from 'next';

const cx = classNames.bind(styles);

const BlogEntry = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    description,
    image,
    date,
    constructorBlocks,
    suggestedBlogEntries,
    author,
    authorUrl,
    team,
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
        variant="blog"
        title={title}
        description={description}
        date={format(new Date(date), 'd MMMM yyyy')}
        cover={image}
        author={author}
        authorUrl={authorUrl}
      />
      <ConstructorContent
        // @ts-expect-error: TODO: В документации API нет описания ответов с блоками конструктора
        blocks={constructorBlocks}
      />
      <ArticleFootnote
        className={cx('footnote')}
        credits={(
          <ArticleCreditsList
            items={team}
          />
        )}
        action={(
          <ShareLinks
            firstLine="Поделиться"
            secondLine="записью"
          />
        )}
      />
      {!!suggestedBlogEntries.length && (
        <Section
          type="blog-entries"
          title="Другие записи"
        >
          <BlogEntryList>
            {suggestedBlogEntries.map(({ id, image, author_url_title, author_url, title, description }) => (
              <BlogEntryList.Item key={id}>
                <BlogEntryCard
                  image={image}
                  authorFullName={author_url_title}
                  authorUrl={author_url}
                  title={title}
                  description={description}
                  viewUrl={`/blog/${id}`}
                />
              </BlogEntryList.Item>
            ))}
          </BlogEntryList>
        </Section>
      )}
    </AppLayout>
  );
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<Record<'id', string>>) => {
  const { id } = params!;
  let data: BlogItemDetailOutput;

  try {
    data = await fetcher<BlogItemDetailOutput>(`/blog/${id}/`);
  } catch ({ statusCode }) {
    switch (statusCode) {
    case 404:
      return notFoundResult;
    default:
      throw new InternalServerError();
    }
  }

  return {
    props: {
      title: data.title,
      description: data.description,
      image: data.image,
      date: data.pub_date,
      constructorBlocks: data.contents,
      suggestedBlogEntries: data.other_blogs,
      team: data.team,
      author: data.author_url_title,
      authorUrl: data.author_url,
    },
  };
};

export default BlogEntry;
