import { FC } from 'react';
import cn from 'classnames/bind';

import { MainTitle } from './title';
import { MainEvents } from './events';
import { MainAside } from './aside';
import { MainBanners } from './banners';
import { MainPlatforms } from './platforms';
import { MainShortList } from './shortList';
import { MainArchive } from './archive';
import { MainPartners } from './partners';
import styles from './main-page.module.css';
import Head from 'next/head';

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

export const MainPage: FC<IMainPageProps> = (props) => {
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
    <>
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
    </>
  );
};

