import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetcher } from 'shared/fetcher';

import AppLayout from '../../components/app-layout';
import { ArticlePage } from '../../components/article-page';
import { BlogData } from '../../components/article-page/types/article-types';

const BlogArticle = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <AppLayout>
      <ArticlePage
        metaTitle={props.title}
        isBlog={true}
        data={{
          id: props.id,
          title: props.title,
          description: props.description,
          preamble: props.preamble,
          image: props.image,
          author_url: props.author_url,
          author_url_title: props.author_url_title,
          contents: props.contents,
          persons: props.persons,
          blogs: props.blogs,
          created: props.created,
          modified: props.modified,
        }}
      />
    </AppLayout>
  );
};

const fetchBlogArticle = async (blogId: string) => {
  let data;

  try {
    data = await fetcher<BlogData>(`/blog/${blogId}/`);
  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<BlogData, Record<'id', string>> = async ({ params }) => {
  const { id: blogId } = params!;

  const blogArticle = await fetchBlogArticle(blogId);

  if (!blogArticle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...blogArticle
    },
  };
};

export default BlogArticle;
