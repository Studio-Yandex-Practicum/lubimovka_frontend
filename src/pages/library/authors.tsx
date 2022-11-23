import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import AuthorsPage from 'components/library-authors-page';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import type { PaginatedAuthorListList, AuthorList, AuthorLetters } from '__generated__/api-typings';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

type Letters = 'А' | 'Б' | 'В' | 'Г' | 'Д' | 'Е' | 'Ж' | 'З' | 'И' | 'К' | 'Л' | 'М' | 'Н' |
  'О' | 'П' | 'Р' | 'С' | 'Т' | 'У' | 'Ф' | 'Х' | 'Ц' | 'Ч' | 'Ш' | 'Щ' | 'Э' | 'Ю' | 'Я';

interface IAuthorsProps {
  authors: AuthorList[],
  letters: Array<Letters>
  defaultLetter: string;
}

const Authors = ({
  authors,
  letters,
  defaultLetter = 'А'
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [a, setAuthors] = useState<IAuthorsProps['authors']>(authors);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  useEffect(() => {

    const handleRouteChange = () => {
      const { searchParams } = new URL(document.URL);
      setIsLoading(true);
      fetchAuthors(searchParams.get('letter') || letters[0])
        .then(setAuthors)
        .then(() => setIsLoading(false));
      // TODO: плохо, что мы никак не обрабатываем исключение, которое может быть выброшено в fetchAuthors
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [router]);

  return (
    <AppLayout>
      <SEO
        title="Авторы"
      />
      <AuthorsPage
        defaultLetter={defaultLetter}
        letters={letters}
        authors={a}
        isLoading={isLoading}
        onLetterChange={() => setIsLoading(true)}
      />
    </AppLayout>
  );
};

async function fetchAuthors(letter: string) {
  // TODO: сходу не разобрался, почему в сгенерированных типах поля PaginatedAuthorListList не обязательные, добавил Required в качестве временного решения
  const { results } = await fetcher<Required<PaginatedAuthorListList>>(`/library/authors/?limit=9999&letter=${encodeURIComponent(letter)}`);

  return results;
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  let letter: string | undefined;
  let authors;

  if ('letter' in query) {
    letter = typeof query.letter === 'object' ? query.letter[0] : query.letter;
  }

  let letters;
  let defaultLetter: string;

  try {
    ({ letters } = await fetcher<AuthorLetters>('/library/author_letters/'));

    defaultLetter = letter || letters[0] || 'А';

    authors = await fetchAuthors(defaultLetter);
  } catch {
    throw new InternalServerError();
  }

  return {
    props: {
      authors,
      letters,
      defaultLetter,
    },
  };
};

export default Authors;
