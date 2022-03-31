import { FC } from 'react';
import cn from 'classnames';

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
}

const AuthorsPage: FC<IAuthorsPageProps> = ({ letters, authors, isLoading }) => {
  const router = useRouter();

  const changeLetter = (letter:string) => {
    router.push(`${router.pathname}/${encodeURI(`?letter=${letter}`) }`,undefined,{ shallow: false });
  };

  return (
    <main className={styles.wrap}>
      <div className={styles.topWrap}>
        <div className={styles.top}/>
      </div>
      <div className={styles.content}>
        <div className={styles.menuWrap}>
          <div className={styles.menu}>
            <Menu type="history">
              <Menu.Item
                href="/library"
                current={false}
              >
                <p className={cn(styles.tabLink)}>
                  Пьесы
                </p>
              </Menu.Item>
              <Menu.Item
                href="/library/authors"
                current
              >
                <p className={cn(styles.tabLink, styles.active)}>
                  Авторы
                </p>
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
