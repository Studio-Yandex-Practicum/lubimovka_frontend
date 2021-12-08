import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useState, useEffect } from 'react';
import AppLayout from 'components/app-layout';
import { Button } from 'components/ui/button';
import LibraryForm from 'components/library-form/library-form';
import { BasicPlayCard, IBasicPlayCardProps } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { fetcher } from 'shared/fetcher';

import SearchResultAuthors from 'components/search-result-authors/search-result-authors';
import style from './index.module.css';

const mockAuthors = ['Августеняк Екатерина', 'Августеняк Екатерина', 'Августеняк Екатерина',
  'Августеняк Екатерина', 'Августеняк Екатерина', 'Августеняк Екатерина', 'Августеняк Екатерина',
  'Августеняк Екатерина', 'Августеняк Екатерина','Августеняк Екатерина',
  'Александрин Егор', 'Борисов Борис', 'Фёдоров Фёдор'];

const mockCard = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: '2020',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
  },
  author: {
    id: 1,
    name: 'Екатерина Августеняк',
  }
};

type Data = { plays: [], authors: [] };

type Letter = string;

interface IAccElem {
  title: Letter
  data: string[]
}

interface IFilteredAuthors {
  [key: Letter]: IAccElem
}

const filteredAuthors = Object.values(
  mockAuthors.reduce((acc:IFilteredAuthors, author) => {
    const firstLetter: Letter = author[0].toLocaleUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = { title: firstLetter, data: [author] };
    } else {
      acc[firstLetter].data.push(author);
    }
    return acc;
  }, {})
);

const mockPieces = Array.from(Array(3)).map(() => mockCard);


export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log(query);

  const res = await fetch(`https://lubimovka.kiryanov.ru/api/v1/library/search/?q=${encodeURI(query.q)}`);
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const SearchResult: NextPage = ( { data } ) => {

  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | undefined>('');

  useEffect(() => {
    const url = document.URL;
    setScreenWidth(document.documentElement.clientWidth);
    setSearchQuery(decodeURI(url.slice(url.indexOf('=')+1)));
  }, []);

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
              {data.plays.map((play) => (
                <BasicPlayCard key={play.id} {...play}/>
              ))}
            </BasicPlayCardList>
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
  );
};

export default SearchResult;
