/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
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
  console.log(data);

  const { afisha, blog, news, banners, places, video_archive, short_list } = data;
  return (
    <AppLayout hiddenPartners>
      <>
        <Head>
          <title>Главная</title>
        </Head>
        <main className={cx('main')}>
          {blog ? <MainAside type="blog" {...blog}/> : <MainAside type="news" {...news}/>}
          <div className={cx('wrapper')}>
            {afisha && <MainTitle
              title={afisha.title}
              button_label={afisha.button_label}
              description={afisha.description}
            />}
          </div>
          {(afisha ? afisha.items : afisha) && <MainEvents {...afisha}/>}
          {banners && banners.items.length && <MainBanners {...banners}/>}
          {short_list && <MainShortList {...short_list}/>}
          {places && places.items.length && <MainPlatforms {...places}/>}
          {video_archive && <MainArchive {...video_archive}/>}
          {partners && <MainPartners partners={partners}/>}
        </main>
      </>
    </AppLayout>
  );
};

const fetchMain = async () => {
  let data;

  try {
    data = await fetcher<Main>('/main/');
  } catch (error) {
    // throw error;
  }
  return data;
};

const fetchPartners = async () => {
  let partners;

  try {
    partners = await fetcher<Partner>('/info/partners/');
  } catch (error) {
    // throw error;
  }
  return partners;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchMain();
  const partners = await fetchPartners();

  // if (!data || !partners) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      // data,
      partners,
    },
  };
};

export default MainPage;
