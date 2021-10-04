import {NextPage} from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';
import {createElement, FC} from 'react';

import data from './assets/mock-data.json';
import metaData from './assets/mock-title.json';

import {MainTitle as Title} from '../../components/main-title/main-title';
import {MainEvents as Events} from '../../components/main-events/main-events';
import {MainAside as Aside} from '../../components/main-aside/main-aside';
import {MainBanners as Banners} from '../../components/main-banners/main-banners';
import {MainPlatforms as Platforms} from '../../components/main-platforms/main-platforms';
import {MainArchive as Archive} from '../../components/main-archive/main-archive';
import {MainShortList as ShortList} from '../../components/main-shortList/main-shortList';

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
  title: Title,
  events: Events,
  aside: Aside,
  banners: Banners,
  platforms: Platforms,
  archive: Archive,
  shortList: ShortList
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
