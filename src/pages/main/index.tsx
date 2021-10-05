import {NextPage} from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';
import {createElement, FC} from 'react';

import data from './assets/mock-data.json';
import metaData from './assets/mock-title.json';

import {MainTitle} from 'components/main-title';
import {MainEvents} from 'components/main-events';
import {MainAside} from 'components/main-aside';
import {MainBanners} from 'components/main-banners';
import {MainPlatforms} from 'components/main-platforms';
import {MainArchive} from 'components/main-archive';
import {MainShortList} from 'components/main-shortList';

import styles from './main.module.css';
const cx = cn.bind(styles);

export interface IMainPageComponent {
  data: {
    title?: string,
    subtitle?: string,
    photo?: string,
  };
}
interface IComponents {
  [key: string]: FC<IMainPageComponent>;
}

const components: IComponents = {
  title: MainTitle,
  events: MainEvents,
  aside: MainAside,
  banners: MainBanners,
  platforms: MainPlatforms,
  archive: MainArchive,
  shortList: MainShortList
};

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <main className={cx('main')}>
        {data.map((el) => createElement(components[el.name], {data: el.content, key: el.name}))}
      </main>
    </>
  );
};

export default MainPage;
