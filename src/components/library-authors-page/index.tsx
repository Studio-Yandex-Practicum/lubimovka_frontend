import { FC } from 'react';

import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';
import LibraryPagination from 'components/library-pagination';

import styles from './index.module.css';
import { useRouter } from 'next/router';

export interface IAuthorInfo {
  slug: string;
  name: string;
}

interface IAuthorsPageProps {
  letters: string[];
  authors: Array<IAuthorInfo>;
  isLoading: boolean;
  onLetterChange: () => void;
  defaultLetter: string;
}

const AuthorsPage: FC<IAuthorsPageProps> = ({ letters, authors, isLoading,onLetterChange,defaultLetter }) => {
  const router = useRouter();

  const changeLetter = (letter: string) => {
    onLetterChange();
    router.push(`${router.pathname}/${encodeURI(`?letter=${letter}`)}`, undefined, { shallow: false, scroll: false });
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.topWrap}>
        <div className={styles.top}/>
      </div>
      <div className={styles.content}>
        <div className={styles.menuWrap}>
          <div className={styles.menu}>
            {/* TODO: убрать дублирование на страницах библиотеки */}
            <Menu type="library-navigation">
              <Menu.Item
                href="/library"
              >
                Пьесы
              </Menu.Item>
              <Menu.Item
                href="/library/authors"
                current
              >
                Авторы
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <h1 className={styles.title}>
          Библиотека
        </h1>
        <div className={styles.search}>
          <LibraryForm/>
        </div>
        <div className={styles.pagination}>
          <LibraryPagination
            defaultLetter={defaultLetter}
            isLoading={isLoading}
            letters={letters}
            authors={authors}
            onChange={changeLetter}
          />
        </div>
      </div>
    </main>
  );
};

export default AuthorsPage;
