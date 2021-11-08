import { NextPage } from 'next';

import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';
import LibraryPagination from 'components/library-pagination';

import styles from './index.module.css';

const mockLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

const AuthorsPage: NextPage = () => {
  return (
    <main className={styles.wrap}>
      <div className={styles.topWrap}>
        <div className={styles.top} />
      </div>
      <div className={styles.middleWrap}>
        <div className={styles.middle} />
      </div>
      <div className={styles.content}>
        <div className={styles.menuWrap}>
          <div className={styles.menu}>
            <Menu type='history'>
              <Menu.Item
                href='/library'
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
        </div>
        <h1 className={styles.title}>Библиотека</h1>
        <div className={styles.search}>
          <LibraryForm />
        </div>
        <div className={styles.pagination}>
          <LibraryPagination letters={mockLetters} top='100px' />
        </div>
      </div>
    </main>
  );
};

export default AuthorsPage;
