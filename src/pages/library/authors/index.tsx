import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import AuthorsPage from 'components/library-authors-page';

const mockLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

const mockAuthors = [
  { id: 1, name: 'Августеняк Екатерина' }, { id: 2, name: 'Александрин Егор' },
  { id: 3, name: 'Борисов Борис' }, { id: 4, name: 'Фёдоров Фёдор' }
];

const Authors: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Авторы</title>
    </Head>
    <AuthorsPage letters={mockLetters} authors={mockAuthors}/>
  </AppLayout>
);

export default Authors;
