import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';
import { fetcher } from 'shared/fetcher';
import { PaginatedPlayList, Play } from 'api-typings';

interface IPiecesProps {
  errorCode?: number,
  pieces: Play[],
}

const Library = ({ errorCode, pieces }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <Head>
        <title>Библиотека</title>
      </Head>
      <LibraryPage items={pieces}/>
    </AppLayout>
  );
};

const fetchPieces = async () => {
  try {
    const { results } = await fetcher<PaginatedPlayList>('/library/plays');
    if(!results) {
      throw 'no results';
    }
    return results;
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps: GetServerSideProps<IPiecesProps> = async () => {
  try {
    return {
      props: {
        pieces: await fetchPieces(),
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        pieces: [],
      }
    };
  }
};

export default Library;
