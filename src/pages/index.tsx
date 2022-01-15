import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';
import Image from 'next/image';
import { Main, Partner } from 'api-typings';

import { fetcher } from 'shared/fetcher';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints';
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
  console.log(data)
  const { first_screen, afisha, blog, news, banners, places, video_archive, short_list } = data;

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  function notEmpty<T>(items: T[]) {
    return items && items.length !== 0;
  }

  function notEmptyKey<T>(items: T) {
    return Object.keys(items).length !== 0;
  }

  return (
    <AppLayout hiddenPartners screenImg={first_screen && notEmptyKey(first_screen) && 
    <div className={cx('wrapperImage')}>
      <Image 
        alt='screen' 
        src={isMobile ? '/images/main/screen-mobile.jpg' : '/images/main/screen.jpg'}
        layout='fill'
        objectFit='fill'
      />
    </div>}>
      <>
        <Head>
          <title>Главная</title>
        </Head>
        <main className={cx('main')}>
          {blog ? <MainAside type="blog" {...blog}/> : <MainAside type="news" {...news}/>}
          <div className={cx('wrapper')}>
            {first_screen && notEmptyKey(first_screen) && <MainFirstScreen/>}
          </div>
          {afisha && notEmptyKey(afisha) &&
          <MainTitle
            title={afisha.title}
            button_label={afisha.button_label}
            description={afisha.description}
          />}
          {afisha && notEmpty(afisha.items) && <MainEvents {...afisha}/>}
          {banners && notEmpty(banners.items) && <MainBanners {...banners}/>}
          {short_list && notEmpty(short_list.items) && <MainShortList {...short_list}/>}
          {places && notEmpty(places.items) && <MainPlatforms {...places}/>}
          {video_archive && <MainArchive {...video_archive}/>}
          {partners && notEmptyKey(partners) && <MainPartners {...partners}/>}
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
    const general = await fetcher<Partner>('/v1/info/partners/?type=general');
    const festival = await fetcher<Partner>('/v1/info/partners/?type=festival');
    const info = await fetcher<Partner>('/v1/info/partners/?type=info');
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
