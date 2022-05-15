import Error from 'next/error';

import { AppLayout } from 'components/app-layout';
import { ArticleHeadline } from 'components/article-headline';
import { ConstructorContent } from 'components/constructor-content';
import { SEO } from 'components/seo';
import { Section } from 'components/section';
import { BlogEntryList } from 'components/blog-entry-list';
import { BlogCard } from 'components/ui/blog-card';
import { PageBreadcrumbs } from 'components/page';
import { Breadcrumb } from 'components/breadcrumb';
import { fetcher } from 'shared/fetcher';
import { format } from 'shared/helpers/format-date';
import { notFoundResult, serverErrorResult } from 'shared/constants/server-side-props';

import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import type { BlogItemDetailOutput } from 'api-typings';

const BlogEntry = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
    suggestedBlogEntries,
    author,
    authorUrl,
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
  if (!params) {
    return serverErrorResult;
  }

  const { id } = params;
  let data: BlogItemDetailOutput;

  try {
    data = await fetcher<BlogItemDetailOutput>(`/blog/${id}/`);
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
      suggestedBlogEntries: data.other_blogs,
      team: data.team,
      author: data.author_url_title,
      authorUrl: data.author_url,
    },
  };
};

export default BlogEntry;
