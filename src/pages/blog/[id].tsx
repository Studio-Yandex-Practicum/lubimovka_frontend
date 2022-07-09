import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { ArticleHeadline } from 'components/article-headline';
import { ArticleFootnote } from 'components/article-footnote';
import { ConstructorContent } from 'components/constructor-content';
import { SEO } from 'components/seo';
import { Section } from 'components/section';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogCard } from 'components/ui/blog-card';
import { PageBreadcrumbs } from 'components/page';
import { Breadcrumb } from 'components/breadcrumb';
import { ShareLinks } from 'components/share-links';
import { ArticleCreditsList } from 'components/article-credits-list';
import { fetcher } from 'services/fetcher';
import { format } from 'shared/helpers/format-date';
import { notFoundResult } from 'shared/constants/server-side-props';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import type { BlogItemDetailOutput } from 'api-typings';

import styles from 'components/article-layout/article-layout.module.css';

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
        date={format('d MMMM yyyy', new Date(date))}
        cover={image}
        author={author}
        authorUrl={authorUrl}
      />
      <ConstructorContent
        // @ts-expect-error
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
            {suggestedBlogEntries.map(({ id, image, author_url_title, title, description }) => (
              <BlogEntryList.Item key={id}>
                <BlogCard
                  id={id}
                  image={image}
                  author={author_url_title}
                  heading={title}
                  description={description}
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
