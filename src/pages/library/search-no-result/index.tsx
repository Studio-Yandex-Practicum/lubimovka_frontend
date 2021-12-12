import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import { Button } from 'components/ui/button';
import LibraryForm from 'components/library-form/library-form';

import style from '../search-result/index.module.css';

const SearchResult: NextPage = () => {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const url = document.URL;
    const handleHashChange = (url: string) => {
      setSearchQuery(decodeURI(url.slice(url.indexOf('=')+1)));
    };
    setScreenWidth(document.documentElement.clientWidth);
    router.events.on('routeChangeComplete', handleHashChange);
    setSearchQuery(decodeURI(url.slice(url.indexOf('=')+1)));
    return () => {
      router.events.off('routeChangeComplete', handleHashChange);
    };

  }, [router]);

  return (
    <AppLayout>
      <main className ={style.page}>
        <div className={style.buttonWrapper}>
          <Button href={'/library'} isLink={true} label={Number(screenWidth) < 729 ? 'БИБЛИОТЕКА':'ВЕРНУТЬСЯ В БИБЛИОТЕКУ'} width={'max-content'} icon={'arrow-left'} iconPlace={'right'} border={'bottomRight'}></Button>
        </div>
        <div className={style.topWrapper}>
          <p className={style.info}>
            По запросу «{searchQuery}» мы ничего не нашли
          </p>
          <div className={style.formWrapper}>
            <LibraryForm></LibraryForm>
            <p className={style.noResult}>
              Быть может, вы имели ввиду «Вырыпаев?». Проверьте, на всякий случай, правописание.
            </p>
          </div>

        </div>
      </main>

    </AppLayout>
  );
};

export default SearchResult;
