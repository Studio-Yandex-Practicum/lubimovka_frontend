import { encode } from 'querystring';

import { objectToQueryString } from '@funboxteam/diamonds';
import Link from 'next/link';
import { useEffect, useRef,useState } from 'react';

import { AlphabeticalPagination } from 'components/alphabetical-pagination';
import { AppLayout } from 'components/app-layout';
import { AuthorList } from 'components/author-list';
import { AuthorListHeading } from 'components/author-list-heading';
import { AuthorsLayout } from 'components/authors-layout/authors-layout';
import { LibraryLayout } from 'components/library-layout';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button2';
import { getAuthors, getAvailableAuthorsPaginationLetters } from 'services/api/authors';
import breakpoints from 'shared/breakpoints';
import { alphabeticalPaginationLetters } from 'shared/constants/alphabetical-pagination-letters';
import { remToPx } from 'shared/helpers/rem-to-px';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { Author } from 'core/author';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { AlphabeticalPaginationLetter } from 'shared/constants/alphabetical-pagination-letters';

interface AuthorsProps {
  authors: Author[]
  availableLetters: AlphabeticalPaginationLetter[]
  currentLetter: AlphabeticalPaginationLetter
}

const authorListYOffsetInRem = 9.25; // TODO: здесь магическое число в качестве быстрого решения, нужен рефакторинг

const Authors = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { availableLetters } = props;
  const [authors, setAuthors] = useState(props.authors);
  const [currentLetter, setCurrentLetter] = useState(props.currentLetter);
  const [pending, setPending] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const shouldScrollAuthorListOnChange = useRef(false);

  useEffect(() => {
    setPending(true);
    getAuthors({ letter: currentLetter }).then((authors) => {
      setAuthors(authors);
      setPending(false);
    });
  }, [currentLetter]);

  useEffect(() => {
    shouldScrollAuthorListOnChange.current = !isMobile;
  }, [isMobile]);

  useEffect(() => {
    if (!shouldScrollAuthorListOnChange.current) {
      return;
    }
    const authorListYOffsetInPx = remToPx(authorListYOffsetInRem);
    if (window.pageYOffset > authorListYOffsetInPx) {
      window.scrollTo({ top: authorListYOffsetInPx });
    }
  }, [authors]);

  return (
    <>
      <SEO title="Авторы"/>
      <AppLayout>
        <LibraryLayout variant="authors">
          <LibraryLayout.Slot area="content">
            <AuthorsLayout>
              <AuthorsLayout.Heading>
                <AuthorListHeading
                  pending={pending}
                  letter={currentLetter}
                  totalAuthors={authors.length}
                />
              </AuthorsLayout.Heading>
              <AuthorsLayout.List pending={pending}>
                <AuthorList>
                  {authors.map((author) => (
                    <AuthorList.Item key={author.slug}>
                      <Link
                        href={`/library/authors/${author.slug}`}
                        passHref
                      >
                        <Button size="m">
                          {author.fullName}
                        </Button>
                      </Link>
                    </AuthorList.Item>
                  ))}
                </AuthorList>
              </AuthorsLayout.List>
            </AuthorsLayout>
          </LibraryLayout.Slot>
          <LibraryLayout.Slot area="pagination">
            <AlphabeticalPagination
              currentLetter={currentLetter}
              availableLetters={availableLetters}
              onLetterChange={setCurrentLetter}
            />
          </LibraryLayout.Slot>
        </LibraryLayout>
      </AppLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<AuthorsProps> = async (ctx) => {
  const searchParams = new URLSearchParams(encode(ctx.query));
  const availableLetters = await getAvailableAuthorsPaginationLetters();
  const fallbackLetter = availableLetters[0] || alphabeticalPaginationLetters[0];
  const targetLetter = searchParams.get('letter');

  if (targetLetter
      && (!availableLetters.includes(targetLetter)
      || !(alphabeticalPaginationLetters).includes(targetLetter))) {
    return {
      redirect: {
        destination: `/library/authors/${objectToQueryString({ letter: fallbackLetter })}`,
        permanent: false,
      },
    };
  }

  const currentLetter = targetLetter || fallbackLetter;
  const authors = await getAuthors({ letter: currentLetter });

  return {
    props: {
      authors,
      currentLetter,
      availableLetters: availableLetters,
    }
  };
};

export default Authors;
