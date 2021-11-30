import { NextPage } from 'next';
import { useState, useEffect } from 'react';

import AppLayout from 'components/app-layout';
import { Button } from 'components/ui/button';
import LibraryForm from 'components/library-form/library-form';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
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
    year: 2020,
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
    authors: [{
      id: 1,
      name: 'Екатерина Августеняк',
    }]
  },
};

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

const SearchResult: NextPage = () => {

  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth);
  }, []);

  return (
    <AppLayout>
      <main className ={style.page}>
        <div className={style.buttonWrapper}>
          <Button isLink={true} label={Number(screenWidth) < 729 ? 'БИБЛИОТЕКА':'ВЕРНУТЬСЯ В БИБЛИОТЕКУ'} width={'max-content'} icon={'arrow-left'} iconPlace={'right'} border={'bottomRight'}></Button>
        </div>
        <div className={style.topWrapper}>
          <p className={style.info}>
            По запросу «август» мы нашли
          </p>
          <div className={style.formWrapper}>
            <LibraryForm></LibraryForm>
          </div>
        </div>
        <section className={style.result}>
          <div className={style.pieces}>
            <BasicPlayCardList>
              {mockPieces.map((piece, i) => (
                <BasicPlayCard key={i} {...piece}/>
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
