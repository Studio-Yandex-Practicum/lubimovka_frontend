import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import cn from 'classnames/bind';
import { Main, Partner } from 'api-typings';

import { fetcher } from 'shared/fetcher';
import { MainTitle } from 'components/main-page/title';
import { MainEvents } from 'components/main-page/events';
import { MainAside } from 'components/main-page/aside';
import { MainBanners } from 'components/main-page/banners';
import { MainPlatforms } from 'components/main-page/platforms';
import { MainShortList } from 'components/main-page/shortList';
import { MainArchive } from 'components/main-page/archive';
import { MainPartners } from 'components/main-page/partners';
import { MainFirstScreen } from 'components/main-page/first-screen';
import { AppLayout } from 'components/app-layout';
import { main } from 'mocks/data/main';

import styles from './index.module.css';

const cx = cn.bind(styles);

const MainPage: NextPage = ({ data = main, partners }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { first_screen, afisha, blog, news, banners, places, video_archive, short_list } = data;

  const [displayFirstScreen, setDisplayFirstScreen] = useState(true);
  const [delay, setDelay] = useState(false);

  const hideFirstScreen = useCallback((delay: number) => {
    setTimeout(() => {
      setDelay(false);
      setDisplayFirstScreen(false);
    }, delay);
  }, [displayFirstScreen]);

  const handlerScroll = useCallback(() => {
    setDelay(true);
    hideFirstScreen(1000);
  }, [delay]);

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    if (displayFirstScreen === false) {
      window.removeEventListener('scroll', handlerScroll);
    }
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }), [];

  useEffect(() => {
    // Отключаю скролл, при перезагрузке страницы
    if (window.pageYOffset !== 0) {
      window.removeEventListener('scroll', handlerScroll);
      setDisplayFirstScreen(false);
    }
  }, []);

  function notEmpty<T>(items: T[]) {
    return items && items.length !== 0;
  }

  function notEmptyKey<T>(items: T) {
    return Object.keys(items).length !== 0;
  }

  return (
    <div className={cx({ 'marginTop': delay })}>
      <AppLayout 
        hiddenPartners 
        expandedHeader={displayFirstScreen}
        screenImg={first_screen && notEmptyKey(first_screen) &&
        displayFirstScreen && <div className={cx('background')}/>}
      >
        <>
          <Head>
            <title>Главная. Любимовка</title>
          </Head>
          <main className={cx('main')}>
            {first_screen && notEmptyKey(first_screen) && displayFirstScreen && <MainFirstScreen {...first_screen}/>}
            {news ? <MainAside type="news" {...news}/> : <MainAside type="blog" {...blog}/>}
            {afisha && notEmptyKey(afisha) &&
            <div className={cx('wrapper')}>
              <MainTitle
                title={afisha.title}
                button_label={afisha.button_label}
                description={afisha.description}
              />
            </div>}
            {afisha && notEmpty(afisha.items) && <MainEvents {...afisha}/>}
            {banners && notEmpty(banners.items) && <MainBanners {...banners}/>}
            {short_list && notEmpty(short_list.items) && <MainShortList {...short_list}/>}
            {places && notEmpty(places.items) && <MainPlatforms {...places}/>}
            {video_archive && <MainArchive {...video_archive}/>}
            {partners && notEmptyKey(partners) && <MainPartners {...partners}/>}
          </main>
        </>
      </AppLayout>
    </div>
  );
};

const fetchMain = async () => {
  try {
    return await fetcher<Main>('/main/');
  } catch (error) {
    return;
  }
};

const fetchPartners = async () => {
  try {
    const general = await fetcher<Partner>('/info/partners/?type=general');
    const festival = await fetcher<Partner>('/info/partners/?type=festival');
    const info = await fetcher<Partner>('/info/partners/?type=info');
    return {
      general,
      festival,
      info
    };
  } catch (error) {
    return;
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchMain();
  const partners = await fetchPartners();

  if (!data || !partners) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      partners,
    },
  };
};

export default MainPage;
