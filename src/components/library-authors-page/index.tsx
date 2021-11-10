import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';
import LibraryPagination from 'components/library-pagination';

import useWindowDimensions from './useWindowDimensions';

import styles from './index.module.css';

const mockLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н',
  'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

const AuthorsPage: NextPage = () => {
  const { width } = useWindowDimensions();
  const [ratio, setRatio] = useState<number>(1);

  useEffect(() => {
    setRatio(width * 0.27);
  }, [width]);

  return (
    <main className={styles.wrap}>
      <div className={styles.topWrap}>
        <div className={styles.top} />
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
          <LibraryPagination letters={mockLetters} top={width === 728 ? '60px' : width > 0 && width < 728 ?
            `${ratio}px` : '86px'} />
        </div>
      </div>
    </main>
  );
};

export default AuthorsPage;
