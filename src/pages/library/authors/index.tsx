import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import AuthorsPage from 'components/library-authors-page';
import { fetcher } from 'shared/fetcher';
import { PaginatedAuthorListList, AuthorList } from 'api-typings';

const mockLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

interface IAuthorsProps {
  errorCode?: number,
  authors: AuthorList[],
}

const Authors = ({ errorCode, authors }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <Head>
        <title>Авторы</title>
      </Head>
      <AuthorsPage letters={mockLetters} authors={authors}/>
    </AppLayout>
  );
};

const fetchAuthors = async () => {
  try {
    const { results } = await fetcher<PaginatedAuthorListList>('/library/authors');
    if(!results) {
      throw 'no results';
    }
    return results;
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps: GetServerSideProps<IAuthorsProps> = async () => {
  try {
    return {
      props: {
        authors: await fetchAuthors(),
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        authors: [],
      }
    };
  }
};

export default Authors;
