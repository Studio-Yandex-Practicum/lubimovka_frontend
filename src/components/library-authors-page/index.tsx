import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';
import LibraryPagination from 'components/library-pagination';
import useWindowDimensions from './useWindowDimensions';

import styles from './index.module.css';

export interface IAuthorInfo {
  id: number;
  name: string;
}

interface IAuthorsPageProps {
  letters: string[];
  authors: Array<IAuthorInfo>;
}

const AuthorsPage: FC<IAuthorsPageProps> = ({ letters, authors }) => {
  const { width } = useWindowDimensions();
  const [ratio, setRatio] = useState<number>(1);

  const router = useRouter();

  useEffect(() => {
    setRatio(width * 0.27);
  }, [width]);

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
                <p className={cn(styles.tabLink, { [styles.active]: router.asPath === '/library' })}>Пьесы</p>
              </Menu.Item>
              <Menu.Item
                href="/library/authors"
                current={true}
              >
                <p className={cn(styles.tabLink, { [styles.active]: router.asPath === '/library/authors' })}>Авторы</p>
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <h1 className={styles.title}>Библиотека</h1>
        <div className={styles.search}>
          <LibraryForm/>
        </div>
        <div className={styles.pagination}>
          <LibraryPagination letters={letters} authors={authors}
            top={width === 728 ? '60px' : width > 0 && width < 728 ?
              `${ratio}px` : '92px'} className={width > 727 ? styles.paginateBar : undefined}/>
        </div>
      </div>
    </main>
  );
};

export default AuthorsPage;
