import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useState, useEffect } from 'react';

import * as breakpoints from 'shared/breakpoints.js';
import { AppLayout } from 'components/app-layout';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import LibraryForm from 'components/library-form/library-form';
import { PlayCard } from 'components/play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import SearchResultAuthors from 'components/search-result-authors/search-result-authors';
import { fetcher } from 'services/fetcher';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import style from './index.module.css';

type Data = { plays: Play[], authors: AuthorFromData[] };

type AuthorFromPlay = {
  slug: string,
  name: string,
}

type AuthorFromData = {
  slug: string,
  name: string,
  first_letter: string,
}

type Play = {
  id: number;
  name: string;
  authors: AuthorFromPlay [];
  city: string;
  year: number;
  url_download: string;
  url_reading: string;
}

type Letter = string;

interface IAccElem {
  title: Letter,
  data: Author[],
}

interface Author {
  slug: string,
  name: string,
}

interface IFilteredAuthors {
  [key: Letter]: IAccElem
}

const SearchResult: NextPage = ( { data }:InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [searchQuery, setSearchQuery] = useState<string | null>('');
  const [filteredAuthors, setFilteredAuthors] = useState<IAccElem[]>([]);

  useEffect(() => {
    const { searchParams } = new URL(document.URL);
    setFilteredAuthors(Object.values(
      data.authors.reduce((acc:IFilteredAuthors, author:AuthorFromData) => {
        const firstLetter: Letter = author.first_letter;
        if (!acc[firstLetter]) {
          acc[firstLetter] = { title: firstLetter, data: [{ name: author.name, slug: author.slug }] };
        } else {
          acc[firstLetter].data.push({ name: author.name, slug: author.slug });
        }
        return acc;
      }, {})
    ));

    setSearchQuery(searchParams.get('q'));
  }, [data]);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  return (
    <div className={style.pageWrapper}>
      <AppLayout>
        <SEO
          title="Результаты поиска"
        />
        <main className ={style.page}>
          <div className={style.buttonWrapper}>
            {isMobile !== null && (
              <Button
                size="s"
                border="right-bottom"
                icon={(
                  <Icon
                    glyph="arrow-left"
                    width="100%"
                    height="100%"
                  />
                )}
                style={{ textTransform: 'uppercase', paddingLeft: '0' }}
                iconPosition="right"
                href="/library"
              >
                {isMobile ? 'БИБЛИОТЕКА':'ВЕРНУТЬСЯ В БИБЛИОТЕКУ'}
              </Button>
            )}
          </div>
          <div className={style.topWrapper}>
            <p className={style.info}>
              По запросу «
              {searchQuery}
              » мы нашли
            </p>
            <div className={style.formWrapper}>
              <LibraryForm/>
            </div>
          </div>
          <section className={style.result}>
            <div className={style.pieces}>
              <BasicPlayCardList>
                {data.plays.map((playFromServer: Play) => {

                  const play = {
                    title: playFromServer.name,
                    city: playFromServer.city,
                    year: playFromServer.year,
                    readingUrl: playFromServer.url_reading,
                    downloadUrl: playFromServer.url_download,
                    authors: playFromServer.authors,
                  };

                  return (
                    <PlayCard key={playFromServer.id} play={play}/>
                  );
                })}
              </BasicPlayCardList>
            </div>
            <div className={style.piecesMobile}>

              {data.plays.map((playFromServer: Play) => {

                const play = {
                  title: playFromServer.name,
                  city: playFromServer.city,
                  year: playFromServer.year,
                  readingUrl: playFromServer.url_reading,
                  downloadUrl: playFromServer.url_download,
                  authors: playFromServer.authors,
                };

                return (
                  <PlayCard key={playFromServer.id} play={play}/>
                );
              })}

            </div>
            <div className={style.authors}>
              <ul className={style.authorsList}>
                {filteredAuthors.map((authors) => (
                  <SearchResultAuthors key={authors.title} authors={authors}/>
                ))}
              </ul>
            </div>
          </section>
        </main>

      </AppLayout>
    </div>
  );
};

export default SearchResult;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let q = typeof query.q === 'string' ? query.q : '';
  let data;

  try {
    data = await fetcher<Data>(`/library/search/?q=${encodeURI(q)}`);

    if (!data.plays.length && !data.authors.length) {
      return {
        redirect: {
          destination: `/library/search-no-result?q=${encodeURI(q)}`,
          statusCode: 301,
        },
      };
    }
  } catch {
    throw new InternalServerError();
  }

  return {
    props: {
      data,
    },
  };
};
