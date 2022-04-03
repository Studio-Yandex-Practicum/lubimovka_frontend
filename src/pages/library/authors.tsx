import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Error from 'next/error';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import AuthorsPage from 'components/library-authors-page';
import { fetcher } from 'shared/fetcher';
// @ts-ignore
import { PaginatedAuthorListList, AuthorList, AuthorLetters } from 'api-typings';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Letters = 'А' | 'Б' | 'В' | 'Г' | 'Д' | 'Е' | 'Ж' | 'З' | 'И' | 'К' | 'Л' | 'М' | 'Н' |
  'О' | 'П' | 'Р' | 'С' | 'Т' | 'У' | 'Ф' | 'Х' | 'Ц' | 'Ч' | 'Ш' | 'Щ' | 'Э' | 'Ю' | 'Я';

interface IAuthorsProps {
  errorCode?: number,
  authors: AuthorList[],
  letters: Array<Letters>
}

const Authors = ({ errorCode, authors, letters }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [a, setAuthors] = useState<IAuthorsProps['authors']>(authors);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  useEffect(() => {

    const handleRouteChange = () => {
      const { searchParams } = new URL(document.URL);
      setIsLoading(true);
      fetchAuthors(searchParams.get('letter') || letters[0]).then(setAuthors).then(()=>setIsLoading(false));
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [router]);

  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <Head>
        <title>
          Авторы
        </title>
      </Head>
      <AuthorsPage letters={letters} authors={a} isLoading={isLoading}/>
    </AppLayout>
  );
};

const fetchAuthors = async (letter: string) => {
  try {
    const { results } = await fetcher<PaginatedAuthorListList>(`/library/authors/?limit=1000&letter=${encodeURI(letter)}`);
    if (!results) {
      throw 'no results';
    }
    return results;
  } catch (error) {
    throw error;
  }
};

const getLetters = async () => {
  try {
    const { letters } = await fetcher<AuthorLetters>('/library/author_letters/');
    if (!letters) {
      throw 'no results';
    }
    return letters;
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps: GetServerSideProps<IAuthorsProps> = async ({ query }) => {
  try {
    const letter = query?.letter;
    const letters = await getLetters();
    const authors = letter ? await fetchAuthors(typeof letter === 'string' ? letter : letters[0]) : [];
    return {
      props: {
        authors,
        letters,
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        authors: [],
        letters: []
      }
    };
  }
};

export default Authors;
