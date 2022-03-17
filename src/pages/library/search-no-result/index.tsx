import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import { Button } from 'components/ui/button';
import useWindowDimensions from 'components/library-authors-page/useWindowDimensions';
import LibraryForm from 'components/library-form/library-form';

import style from '../search-result/index.module.css';

const SearchResult: NextPage = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState<string | null>('');

  useEffect(() => {
    const { searchParams } = new URL(document.URL);

    const handleRouteChange = () => {
      setSearchQuery(searchParams.get('q'));
    };

    handleRouteChange();

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [router]);

  return (
    <div className={style.pageWrapper}>
      <AppLayout>
        <main className ={style.page}>
          <div className={style.buttonWrapper}>
            <Button
              href={'/library'}
              isLink
              label={width < 729 ? 'БИБЛИОТЕКА':'ВЕРНУТЬСЯ В БИБЛИОТЕКУ'}
              width={'max-content'}
              icon={'arrow-left'}
              iconPlace={'right'}
              border={'bottomRight'}
            />
          </div>
          <div className={style.topWrapper}>
            <p className={style.info}>
              По запросу «
              {searchQuery}
              » мы ничего не нашли
            </p>
            <p className={style.noResultMobile}>
              Быть может, вы имели ввиду «Вырыпаев?». Проверьте, на всякий случай, правописание.
            </p>
            <div className={style.formWrapper}>
              <LibraryForm/>
              <p className={style.noResult}>
                Быть может, вы имели ввиду «Вырыпаев?». Проверьте, на всякий случай, правописание.
              </p>
            </div>

          </div>
        </main>

      </AppLayout>
    </div>
  );
};

export default SearchResult;
