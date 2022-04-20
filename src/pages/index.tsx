import classNames from 'classnames/bind';

import { MainTitle } from 'components/main-page/title';
import { MainEvents } from 'components/main-page/events';
import { MainAside } from 'components/main-page/aside';
import { MainBanners } from 'components/main-page/banners';
import { MainPlatforms } from 'components/main-page/platforms';
import { MainShortList } from 'components/main-page/shortList';
import { MainArchive } from 'components/main-page/archive';
import { HomepageHeadline } from 'components/main-page/homepage-headline';
import { MainPartner } from 'components/main-page/partners';
import { AppLayout } from 'components/app-layout';
import { Banner } from 'components/banner';
import { SEO } from 'components/seo';
import { fetcher } from 'shared/fetcher';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import type { Main, Partner } from 'api-typings';

import styles from './index.module.css';

const cx = classNames.bind(styles);

const MainPage = ({ data, partners }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    first_screen,
    afisha,
    blog,
    news,
    banners,
    places,
    video_archive,
    short_list,
  } = data;

  return (
    <AppLayout
      hiddenPartners
      navbarProps={{
        view: first_screen ? 'expanded': 'normal',
      }}
      headBanner={first_screen ? (
        <Banner
          className={cx('head-banner')}
          image={first_screen.image}
        />
      ) : undefined}
    >
      <SEO title="Главная"/>
      {first_screen && (
        <HomepageHeadline
          className={cx('headline')}
          {...first_screen}
        />
      )}
      <main className={cx('main')}>
        <MainAside
          {...news ? {
            type: 'news',
            ...news
          } : {
            type: 'blog',
            ...blog
          }}
        />
        <div className={cx({ wrapper: news || blog })}>
          {afisha && (
            <MainTitle
              afisha_today={afisha.afisha_today}
              description={afisha.description}
            />
          )}
        </div>
        {afisha && afisha.items.length > 0 && (
          <MainEvents
            {...afisha}
          />
        )}
        {banners && banners.length > 0 && (
          <MainBanners
            {...banners}
          />
        )}
        {short_list && short_list.items.length > 0 && (
          <MainShortList
            {...short_list}
          />
        )}
        {places && places.items.length > 0 && (
          <MainPlatforms {...places}/>
        )}
        {video_archive && (
          <MainArchive
            {...video_archive}
          />
        )}
        {partners && partners.length > 0 && (
          <MainPartner
            {...partners}
          />
        )}
      </main>
    </AppLayout>
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
    const festival = await fetcher<Partner>('/info/partners/?type=festival');
    const info = await fetcher<Partner>('/info/partners/?type=info');
    return {
      festival,
      info
    };
  } catch (error) {
    return;
  }
};

export const getServerSideProps: GetServerSideProps  = async () => {
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
