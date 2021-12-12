import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useState, useEffect } from 'react';

import { AppLayout } from 'components/app-layout';
import { Button } from 'components/ui/button';
import LibraryForm from 'components/library-form/library-form';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import SearchResultAuthors from 'components/search-result-authors/search-result-authors';
import { fetcher } from 'shared/fetcher';

import style from './index.module.css';

type Data = { plays: Play[], authors: AuthorFromData[] };

type AuthorFromPlay = {
  id: number,
  name: string,
}

type AuthorFromData = {
  id: number,
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

// type PlayForBasicPlayCardComponent = {

//   id?: number;
//   title: string;
//   city: string;
//   year: number;
//   linkView: string;
//   linkDownload: string;
//   authors: AuthorFromPlay [];

// }

type Letter = string;

interface IAccElem {
  title: Letter
  data: string[]
}

interface IFilteredAuthors {
  [key: Letter]: IAccElem
}

// const mockPieces = Array.from(Array(3)).map(() => mockCard);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { q }:any = context.query;
  const data: Data = await fetcher(`/library/search/?q=${encodeURI(q)}`);

  if (!data.plays.length && !data.authors.length) {
    return {
      redirect: {
        destination: `/library/search-no-result?q=${encodeURI(q)}`,
        statusCode: 301,
      },
    };
  }

  return {
    props: {
      data,
    },
  };
};

const SearchResult: NextPage = ( { data }:InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredAuthors, setFilteredAuthors] = useState<IAccElem[] | null>(null);

  useEffect(() => {
    const url = document.URL;
    setFilteredAuthors(Object.values(
      data.authors.reduce((acc:IFilteredAuthors, author:AuthorFromData) => {
        const firstLetter: Letter = author.first_letter;
        if (!acc[firstLetter]) {
          acc[firstLetter] = { title: firstLetter, data: [author.name] };
        } else {
          acc[firstLetter].data.push(author.name);
        }
        return acc;
      }, {})
    ));

    setScreenWidth(document.documentElement.clientWidth);
    setSearchQuery(decodeURI(url.slice(url.indexOf('=')+1)));
  }, [data]);

  return (
    <AppLayout>
      <main className ={style.page}>
        <div className={style.buttonWrapper}>
          <Button href={'/library'} isLink={true} label={Number(screenWidth) < 729 ? 'БИБЛИОТЕКА':'ВЕРНУТЬСЯ В БИБЛИОТЕКУ'} width={'max-content'} icon={'arrow-left'} iconPlace={'right'} border={'bottomRight'}></Button>
        </div>
        <div className={style.topWrapper}>
          <p className={style.info}>
            По запросу «{searchQuery}» мы нашли
          </p>
          <div className={style.formWrapper}>
            <LibraryForm></LibraryForm>
          </div>
        </div>
        <section className={style.result}>
          <div className={style.pieces}>
            <BasicPlayCardList>
              {data.plays.map((playFromServer: Play) => {

                const play = {
                  id: playFromServer.id,
                  title: playFromServer.name,
                  city: playFromServer.city,
                  year: playFromServer.year,
                  linkView: playFromServer.url_reading,
                  linkDownload: playFromServer.url_download,
                  authors: playFromServer.authors,
                };

                return (
                  <BasicPlayCard key={play.id} {... { play }}/>
                );
              })}
            </BasicPlayCardList>
          </div>
          <div className={style.authors}>
            <ul className={style.authorsList}>
              {filteredAuthors?.map((authors) => (
                <SearchResultAuthors key={authors.title} authors={authors}/>
              ))}
            </ul>
          </div>
        </section>
      </main>

    </AppLayout>
  );
};

export default SearchResult;
