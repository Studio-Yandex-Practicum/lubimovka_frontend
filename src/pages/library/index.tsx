import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';

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

const items = Array.from(Array(7)).map(() => mockCard);

const Library: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Библиотека</title>
    </Head>
    <LibraryPage items={items}/>
  </AppLayout>
);

export default Library;
