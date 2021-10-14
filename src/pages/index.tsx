import { NextPage } from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';

import { AppLayout } from '../components/app-layout';
import { MainTitle } from 'components/main-title';
import { MainEvents } from 'components/main-events';
import { MainAside } from 'components/main-aside';
import { MainBanners } from 'components/main-banners';
import { MainPlatforms } from 'components/main-platforms';
import { MainArchive } from 'components/main-archive';
import { MainShortList } from 'components/main-shortList';
import { MainPartners } from 'components/main-partners';

import styles from './index.module.css';

const cx = cn.bind(styles);

interface IMainPageProps {
  title: string;
  metaTitle: string;
  events: boolean;
  aside: boolean;
  banners: boolean;
  archive: boolean;
  platforms: boolean;
  shortList: boolean;
  partners: boolean;
}

export const getStaticProps = () => {
  return {
    props: {
      metaTitle: 'Главная страница',
      title: 'Компонент Title',
      events: true,
      aside: true,
      banners: true,
      platforms: true,
      archive: true,
      shortList: true,
      partners: true,
    },
  };
};

const Home: NextPage<IMainPageProps> = (props: IMainPageProps) => {
  const {
    title,
    metaTitle,
    events,
    aside,
    banners,
    platforms,
    archive,
    shortList,
    partners,
  } = props;
  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <main className={cx('main')}>
        {title && <MainTitle title={title} />}
        {events && <MainEvents />}
        {aside && <MainAside />}
        {banners && <MainBanners />}
        {platforms && <MainPlatforms />}
        {shortList && <MainShortList />}
        {archive && <MainArchive />}
        {partners && <MainPartners />}
      </main>
    </AppLayout>
  );
};

export default Home;
