import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
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
import { AppLayout } from 'components/app-layout';

import { main } from 'mocks/data/main';

import styles from './index.module.css';

const cx = cn.bind(styles);

const MainPage: NextPage = ({ data = main, partners }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data, partners);

  const { afisha, blog, news, banners, places, video_archive, short_list } = data;

  function notEmpty<T>(items: T[]) {
    return items && items.length !== 0;
  }

  return (
    <AppLayout hiddenPartners>
      <>
        <Head>
          <title>Главная</title>
        </Head>
        <main className={cx('main')}>
          {blog ? <MainAside type="blog" {...blog}/> : <MainAside type="news" {...news}/>}
          <div className={cx('wrapper')}>
            {afisha && Object.keys(afisha) && 
            <MainTitle
              title={afisha.title}
              button_label={afisha.button_label}
              description={afisha.description}
            />}
          </div>
          {afisha && notEmpty(afisha.items) && <MainEvents {...afisha}/>}
          {banners && notEmpty(banners.items) && <MainBanners {...banners}/>}
          {short_list && notEmpty(short_list.items) && <MainShortList {...short_list}/>}
          {places && notEmpty(places.items) && <MainPlatforms {...places}/>}
          {video_archive && <MainArchive {...video_archive}/>}
          {partners && notEmpty(partners) && <MainPartners partners={partners}/>}
        </main>
      </>
    </AppLayout>
  );
};

const fetchMain = async () => {
  try {
    return await fetcher<Main>('/v1/main/');
  } catch (error) {
    return;
  }
};

const fetchPartners = async () => {
  try {
    return await fetcher<Partner>('/v1/info/partners/');
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
