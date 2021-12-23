// @ts-nocheck

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import cn from 'classnames';

import { AppLayout } from 'components/app-layout';
import { AuthorOverview } from 'components/author-page/overview';
import { AuthorPlays } from 'components/author-page/plays';
import { AnotherPlays } from 'components/author-page/another-plays';
import { AuthorInformation } from 'components/author-page/information';
import { AuthorRequest } from 'components/author-page/request';
import { fetcher } from 'shared/fetcher';
import { AuthorRetrieve as AuthorRetrieveModel } from 'api-typings';

import styles from 'components/author-page/author.module.css';

const fetchAuthors = async (authorId: string) => {
  let data;

  try {
    data = await fetcher<AuthorRetrieveModel>(`/library/authors/${authorId}/`);
  } catch (error) {
    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<AuthorRetrieveModel, Record<'id', string>> = async ({ params }) => {
  const { id: authorId } = params!;

  const author = await fetchAuthors(authorId);

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...author,
    },
  };
};

const Author = (props: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const {
    name,
    city,
    quote,
    biography,
    achievements,
    social_networks,
    email,
    other_links,
    plays,
    other_plays,
    image,
  } = props;

  return (
    <AppLayout>
      <div className={cn(styles.author)}>
        <AuthorOverview
          photo={image}
          name={name}
          city={city}
          quote={quote}
          description={biography}
          tag={achievements}
          socialLink={social_networks}
          email={email}
          otherLinks={other_links}
          data={props}
        />
        <AuthorPlays
          data={plays}
        />
        <AnotherPlays
          data={other_plays}
        />
        <AuthorInformation
          data={other_links}
        />
        <AuthorRequest/>
      </div>
    </AppLayout>
  );
};

export default Author;
