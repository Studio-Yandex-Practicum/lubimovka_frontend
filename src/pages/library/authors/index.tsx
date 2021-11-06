import { NextPage } from 'next';

import AppLayout from 'components/app-layout';
import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';
import LibraryPagination from 'components/library-pagination';

import styles from './index.module.css';

const mockLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

const Authors: NextPage = () => {
  return (
    <AppLayout>
      <div className={styles.content}>
        <div className={styles.menu}>
          <Menu type='history'>
            <Menu.Item
              href='/library/plays'
            >
        Пьесы
            </Menu.Item>
            <Menu.Item
              href='/library/authors'
            >
        Авторы
            </Menu.Item>
          </Menu>
        </div>
        <h1 className={styles.title}>Библиотека</h1>
        <div className={styles.search}>
          <LibraryForm />
        </div>
        <LibraryPagination letters={mockLetters} top='90px' />
      </div>
    </AppLayout>
  );
};

export default Authors;
