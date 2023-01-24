import { encode } from 'querystring';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { AppLayout } from 'components/app-layout';
import { SEO } from 'components/seo';
import { SearchLayout } from 'components/search-layout';
import { LibrarySearchForm } from 'components/library-search-form';
import { PlayList } from 'components/play-list';
import { PlayCard } from 'components/play-card';
import { AlphabeticalAuthorList } from 'components/alphabetical-author-list';
import { Breadcrumb } from 'components/breadcrumb';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { getSearchResults } from 'services/api/search';
import { isNonEmpty } from 'shared/helpers/is-non-empty';
import breakpoints from 'shared/breakpoints';

import type { GetServerSideProps } from 'next';
import type { Play } from 'core/play';
import type { Author } from 'core/author';

enum QueryParam {
  Query = 'query',
}

interface SearchProps {
  plays: Play[]
  authors: Author[]
}

const BREADCRUMB_PATH = '/library';

const Search = (props: SearchProps) => {
  const router = useRouter();
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const {
    plays,
    authors,
  } = props;

  const searchParams = useMemo(() => new URLSearchParams(encode(router.query)), [router]);
  const query = searchParams.get('query') as string;
  const hasResults = isNonEmpty(plays) || isNonEmpty(authors);

  return (
    <>
      <SEO title="Поиск"/>
      <AppLayout
        {...isMobile && {
          navbarAddon: (
            <Breadcrumb
              text="Библиотека"
              path={BREADCRUMB_PATH}
            />
          )
        }}
      >
        <SearchLayout>
          <SearchLayout.Slot area="breadcrumb">
            <Breadcrumb
              text="Вернуться в библиотеку"
              path={BREADCRUMB_PATH}
            />
          </SearchLayout.Slot>
          <SearchLayout.Slot area="message">
            По запросу «
            {query}
            » мы
            {' '}
            {!hasResults && 'ничего не'}
            {' '}
            нашли
          </SearchLayout.Slot>
          <SearchLayout.Slot area="search">
            <LibrarySearchForm/>
          </SearchLayout.Slot>
          <SearchLayout.Slot area="content">
            {isNonEmpty(plays) && (
              <PlayList>
                {plays.map((play) => (
                  <PlayList.Item key={play.id}>
                    <PlayCard
                      title={play.title}
                      city={play.city}
                      year={play.year}
                      readingUrl={play.readingUrl}
                      downloadUrl={play.downloadUrl}
                      authors={play.authors}
                    />
                  </PlayList.Item>
                ))}
              </PlayList>
            )}
            {isNonEmpty(authors) && (
              <AlphabeticalAuthorList
                items={authors}
              />
            )}
          </SearchLayout.Slot>
          {hasResults || (
            <SearchLayout.Slot area="not-found-note">
              Быть может, вы имели ввиду «Вырыпаев?». Проверьте, на всякий случай, правописание.
            </SearchLayout.Slot>
          )}
        </SearchLayout>
      </AppLayout>
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps<SearchProps> = async (ctx) => {
  const searchParams = new URLSearchParams(encode(ctx.query));

  const results = await getSearchResults(searchParams.get(QueryParam.Query) as string);

  return {
    props: results,
  };
};
