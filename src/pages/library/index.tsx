import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';

const mockCard = {
  play: {
    name: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: 2020,
    url_reading: 'https://lubimovka.ru/',
    url_download: 'https://lubimovka.ru/',
    authors: [{
      id: 1,
      name: 'Екатерина Августеняк',
    }]
  }
};

const items = Array.from(Array(7)).map(() => mockCard);

const Library: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Библиотека</title>
    </Head>
    <LibraryPage items={items} />
  </AppLayout>
);

export default Library;
